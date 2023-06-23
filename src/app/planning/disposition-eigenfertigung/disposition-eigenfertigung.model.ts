export interface DispositionEigenfertigungResult {
    produktGruppe: string,
    articles: DispositionEigenfertigungArticleResult[]
}

export interface DispositionEigenfertigungArticleResult {
    articleNumber: number,
    vertriebswunsch: number,
    warteschlange: number,
    geplanterSicherheitsbestand: number,
    lagerbestandEndeVorperiode: number,
    auftraegeInWarteschlange: number,
    auftraegeInBearbeitung: number,
    produktionFuerKommendePeriode: number,
    zusaetzlicheProduktionsauftraege: number
}

export interface DispositionEigenfertigungArticleInput {
    geplanterSicherheitsbestand: Map<number, number>,
    zuesaetzlicheProduktionsauftraege: Map<number, number>
}

export interface ProductionEntity {
    article: number,
    periodNplusOne: number,
    periodNplusTwo: number,
}