
export type SupplyChainInput = {
  input: {
      qualitycontrol: {
          type: string,
          delay: number,
          losequantity: number
      },
      sellwish: [
        {
          item: {
            article: number,
            quantity: number
          }
        },
      ],
      selldirect: [
        {
          item: {
            article: number,
            quantity: number,
            price: number,
            penalty: number
          }
        },
      ],
      orderlist: [
        {
          order: {
            article: number,
            quantity: number,
            modus: number,
          }
        },
      ],
      productionlist: [
        {
          production: {
            article: number,
            quantity: number,
          }
        },
      ],
      workingtimelist: [
        {
          workingtime: {
            station: number,
            shift: number,
            overtime: number,
          }
        },
      ],
  }
}