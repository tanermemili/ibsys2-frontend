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

export class DispositionEigenfertigungArticleInput {
    geplanterSicherheitsbestand: {}
    zuesaetzlicheProduktionsauftraege: {}

    constructor(geplanterSicherheitsbestand: {}, zuesaetzlicheProduktionsauftraege: {}) {
        this.geplanterSicherheitsbestand = geplanterSicherheitsbestand;
        this.zuesaetzlicheProduktionsauftraege = zuesaetzlicheProduktionsauftraege;
    }

}