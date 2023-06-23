export interface ProductionEntity {
    article: number,
    periodN: number,
    periodNplusOne: number,
    periodNplusTwo: number,
    periodNplusThree: number,
}

export class ProductionEntityPost {
  article: number
  periodNplusOne: number
  periodNplusTwo: number
  periodNplusThree: number

    constructor(article: number, periodNplusOne: number, periodNplusTwo: number, periodNplusThree: number) {
    this.article = article;
    this.periodNplusOne = periodNplusOne;
    this.periodNplusTwo = periodNplusTwo;
    this.periodNplusThree = periodNplusThree;
    }

}
