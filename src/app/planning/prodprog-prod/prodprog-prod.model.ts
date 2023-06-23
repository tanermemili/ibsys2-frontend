export interface ProdprogResult {
    produktGruppe: string,
    articles: ProdprogArticleResult[]
}

export interface ProdprogArticleResult {
    articleNumber: number,
    periodN: number,
    periodNplusOne: number,
    periodNplusTwo: number,
    periodNplusThree: number,
}

export interface ProdprogArticleInput {
    periodNplusOne: Map<number, number>,
    periodNplusTwo: Map<number, number>,
    periodNplusThree: Map<number, number>
}

export interface ProductionEntity {
    article: number,
    periodN: number,
    periodNplusOne: number,
    periodNplusTwo: number,
    periodNplusThree: number,
}