export interface searchObject {
  searchVal: string,
  dishType: string,
  cuisine: string,
  dietType:string,
}

export interface RecipeGeneral {
    id: number,
    title: string,
    image: string,
    sustainable: boolean,
    healthScore: number,
    readyInMinutes: number,
    servings: number,
    extendedIngredients: [
        {
            original: string,
            measures: {
                metric: {
                    amount: number,
                    unitShort: string,
                }
            }
        }
    ],
    analyzedInstructions: [
    {
      steps: [
        {
          number: number,
          step: string,
          length: {
            number: number,
            unit: string,
            }

        }
      ]
    }
    ],
}
