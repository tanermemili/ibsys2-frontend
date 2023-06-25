import { Injectable } from '@angular/core';
import { SupplyChainInput } from './planning/planend/planend.model';

@Injectable({
  providedIn: 'root'
})
export class XmlMapperService {
  constructor() { }

  public mapSupplyChainInputToXmlRdyJson(data: SupplyChainInput) {
    const {
      qualitycontrol,
      sellwish,
      selldirect,
      orderlist,
      productionlist,
      workingtimelist
    } = data.input

    return {
      "input": {
        "qualitycontrol": {
          "_attributes": {
            "type": qualitycontrol.type,
            "delay": qualitycontrol.delay,
            "losequantity": qualitycontrol.losequantity
          }
        },
        "sellwish": {
          "item": sellwish.map(({ item }) => {
            return {
              "_attributes": {
                "article": item.article,
                "quantity": item.quantity
              }
            }
          })
        },
        "selldirect": {
          "item": selldirect.map(({ item }) => {
            return {
              "_attributes": {
                "article": item.article,
                "quantity": item.quantity,
                "price": item.price,
                "penalty": item.penalty
              }
            }
          })
        },
        "orderlist": {
          "order": orderlist.map(({ order }) => {
            return {
              "_attributes": {
                "article": order.article,
                "quantity": order.quantity,
                "modus": order.modus
              }
            }
          })
        },
        "productionlist": {
          "production": productionlist.map(({ production }) => {
            return {
              "_attributes": {
                "article": production.article,
                "quantity": production.quantity
              }
            }
          })
        },
        "workingtimelist": {
          "workingtime": workingtimelist.map(({ workingtime }) => {
            return {
              "_attributes": {
                "station": workingtime.station,
                "shift": workingtime.shift,
                "overtime": workingtime.overtime
              }
            }
          })
        }
      }
    }
  }
}
