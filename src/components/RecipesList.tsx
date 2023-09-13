import { useEffect, useState } from "react";

interface RecipeGeneral {
  id: number,
  title: string,
  image: string
}


function RecipesList() {

  // * ------------ DEFINE USESTATES -------------------------------
  const [recipesData, setRecipesData] = useState<RecipeGeneral[]>([
    {
      id: 0,
      title: '',
      image : '',
    }
  ])
  const [totalResults, setTotalResults] = useState<number | null>(null)
  const [offset, setOffset] = useState<number | null>(null)

  
  const fetchRecipesList = async () => {

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=72af2c7b661040b7a5f1bc928fa61a0e&diet=vegan`;

    try {
      // * ----- FETCH ----------------
      const response = await fetch(url);
      const data = await response.json();
      // * ----- ASSIGN VALUES ----------
      const recipeData = data.results as RecipeGeneral[];
      const offsetVal = data.offset as number;
      const totalResVal = data.totalResults as number;
      // * ----- SET USESTATES ------------
      setTotalResults(totalResVal)
      setOffset(offsetVal)
      setRecipesData(recipeData);
    } catch (error) {
      console.log("Error --->", error);
   }
   }
   
  useEffect(() => {
     fetchRecipesList()   
  }, [])
  

  
  return (
    <>
    {recipesData && recipesData.map((recipe, idx) => {
      return <p key={idx}>{recipe.title}</p>
    })}
    </>
  )
}

export default RecipesList