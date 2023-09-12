import { useEffect } from "react";


function RecipesList() {

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=72af2c7b661040b7a5f1bc928fa61a0e&diet=vegan`;

  const fetchData = async (url:string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error --->", error);
   }
   }
   
  useEffect(() => {
     fetchData(url)   
  }, [])
  
  
  return (
    <div>RecipesList</div>
  )
}

export default RecipesList