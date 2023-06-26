export interface CapacityPlanningProduction {
  article: number,
  quantity: number
}

export interface WorkingTimePlan {
  id: number,
  articleNumber: number,
  workstationNumber: number,
  workingTime: number,
  setUpTime: number
}

export interface Item {
  workingtime: Workingtime
}

export interface Workingtime {
  station: number,
  shift: number,
  overtime: number,
}

export interface CapacityPlanningResultObject {
  newCapacity_reqs: Map<number, number>,
  newSetUpTime: Map<number, number>
  behindScheduleCapacity: Map<number, number>
  behindScheduleSetUpTime: Map<number, number>
  totalCapacityRequirement: Map<number, number>
  workstationsWithOverTime: Item[]
}

export interface CapacityPlanningResult {
  workingTimePlan: WorkingTimePlan[],
  capacityPlanningResult: CapacityPlanningResultObject,
}

export class CapacityPlanningInput {
  articleNumber: number
  orderQuantity: number

  constructor(articleNumber: number, orderQuantity: number) {
    this.articleNumber = articleNumber
    this.orderQuantity = orderQuantity;
  }

}

export class CapacityPlanningArticle {
  article: number
  produktionsmenge: number
  workstations: Map<number, number>

  constructor(article: number, produktionsmenge: number) {
    this.article = article;
    this.produktionsmenge = produktionsmenge;
    this.workstations = new Map<number, number>

    this.workstations.set(1, 0)
    this.workstations.set(2, 0)
    this.workstations.set(3, 0)
    this.workstations.set(4, 0)
    this.workstations.set(6, 0)
    this.workstations.set(7, 0)
    this.workstations.set(8, 0)
    this.workstations.set(9, 0)
    this.workstations.set(10, 0)
    this.workstations.set(11, 0)
    this.workstations.set(12, 0)
    this.workstations.set(13, 0)
    this.workstations.set(14, 0)
    this.workstations.set(15, 0)
  }


}

export class CapacityPlanningOverview {
  description: string
  workstations: Map<number, number> = new Map<number, number>

  constructor(description: string) {
    this.description = description;
  }

}
