import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Production, SellDirectField, SupplyChainInput } from './planend.model';

@Injectable({
  providedIn: 'root'
})
export class PlanendService {
  private planendData: SupplyChainInput | undefined
  private planendData$ = new Subject<SupplyChainInput>();

  setPlanendData(data: SupplyChainInput) {
    this.planendData = data
    this.planendData$.next(data);
  }

  getPlanendDataSubject() {
    return this.planendData$.asObservable();
  }

  getPlanedData() {
    return this.planendData
  }

  canSplit(production: Production) {
    return production.production.quantity > 10
  }

  splitProduction(production: Production) {
    const newQuantity = production.production.quantity / 2
    production.production.quantity = this.roundUpToTen(newQuantity)
    this.appendProduction(production.production.article, this.roundDownToTen(newQuantity))
  }

  private roundUpToTen(number: number) {
    return Math.ceil(number / 10) * 10
  }

  private roundDownToTen(number: number) {
    return Math.floor(number / 10) * 10
  }

  private appendProduction(article: number, quantity: number) {
    if (this.planendData) {
      const newProduction: Production = {
        production: { article, quantity }
      }
      this.planendData.input.productionlist.push(newProduction)
      this.planendData$.next(this.planendData)
    }
  }

  canMerge(production: Production) {
    if (!this.planendData) {
      return false
    }
    return this.planendData.input.productionlist
      .filter(p => p.production.article === production.production.article)
        .length > 1
  }

  mergeProduction(index: number, production: Production) {
    const { article, quantity } = production.production

    if (this.planendData && this.planendData.input.productionlist.length) {
      this.planendData.input.productionlist.splice(index, 1)
      this.findProductionsByArticle(article)[0].production.quantity += quantity
      this.planendData$.next(this.planendData)
    }
  }

  private findProductionsByArticle(article: number) {
    if (!this.planendData) {
      return []
    }
    return this.planendData.input.productionlist
      .filter(p => p.production.article === article)
  }

  updateSellDirect(article: number, field: SellDirectField, value: number) {
    if (this.planendData) {
      const targetItem = this.planendData.input.selldirect
        .find(s => s.item.article === article)

      if (targetItem) {
        targetItem.item[field] = value
      }
      this.planendData$.next(this.planendData)
    }
  }
}
