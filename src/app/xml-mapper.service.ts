import { Injectable } from '@angular/core';
import { SupplyChainInput } from './modules/SupplyChainInput';


@Injectable({
  providedIn: 'root'
})
export class XmlMapperService {

  constructor() { }
  public mapJsontoXmlrdyJson(json: SupplyChainInput): any {
  
      return {
        "input": {
            "qualitycontrol": {
                "_attributes": {
                    "type": json.input.qualitycontrol.type,
                    "delay": json.input.qualitycontrol.delay,
                    "losequantity": json.input.qualitycontrol.losequantity
                }
            },
            "sellwish": {
                "item": json.input.sellwish.map(({item}) => {
                    return {
                        "_attributes": {
                            "article": item.article,
                            "quantity": item.quantity
                        }
                    }
                })
            },
            "selldirect": {
                "item": json.input.selldirect.map(({item}) => {
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
                "order": json.input.orderlist.map(({order}) => {
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
                "production": json.input.productionlist.map(({production}) => {
                    return {
                        "_attributes": {
                            "article": production.article,
                            "quantity": production.quantity
                        }
                    }
                }
            )},
            "workingtimelist": {
                "workingtime": json.input.workingtimelist.map(({workingtime}) => {
                    return {
                        "_attributes": {
                            "station": workingtime.station,
                            "shift": workingtime.shift,
                            "overtime": workingtime.overtime
                        }
                    }
                }
            )}
        }
    }
  }
}
