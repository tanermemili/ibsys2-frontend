export class CapacatiyPlanningArticle {
  article: number;
  auftragsmenge: number;
  workstationsWithTime: Map<number, number>;

  constructor(article: number, auftragsmenge: number) {
    this.article = article;
    this.auftragsmenge = auftragsmenge;
    this.workstationsWithTime = new Map<number, number>
    this.workstationsWithTime.set(1, 0)
    this.workstationsWithTime.set(2, 0)
    this.workstationsWithTime.set(3, 0)
    this.workstationsWithTime.set(4, 0)
    this.workstationsWithTime.set(5, 0)
    this.workstationsWithTime.set(6, 0)
    this.workstationsWithTime.set(7, 0)
    this.workstationsWithTime.set(8, 0)
    this.workstationsWithTime.set(9, 0)
    this.workstationsWithTime.set(10, 0)
    this.workstationsWithTime.set(11, 0)
    this.workstationsWithTime.set(12, 0)
    this.workstationsWithTime.set(13, 0)
    this.workstationsWithTime.set(14, 0)
    this.workstationsWithTime.set(15, 0)
  }

}
