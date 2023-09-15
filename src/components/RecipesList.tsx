import { useEffect, useState } from "react";
import {Container, Row } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

interface RecipeGeneral {
  id: number,
  title: string,
  image: string
}

interface Props {
  searchObj: searchObject,
}

interface searchObject {
  searchVal: string,
  dishType: string,
  cuisine: string,
  dietType:string,
}

function RecipesList({searchObj} : Props) {
  
  console.log(searchObj.dietType);
  // * ------------ DEFINE USESTATES -------------------------------
  const [recipesData, setRecipesData] = useState<RecipeGeneral[]>([
    {
      id: 0,
      title: '',
      image : '',
    }
  ])
  const [totalResults, setTotalResults] = useState<number>(0)
  const [offset, setOffset] = useState<number>(0)


  const fetchRecipesList = async () => {
    const baseUrl = 'https://api.spoonacular.com/recipes/';
    const apiKey = '72af2c7b661040b7a5f1bc928fa61a0e';
    const number = 6;
    const url = `${baseUrl}complexSearch?apiKey=${apiKey}&query=${searchObj.searchVal}&type=${searchObj.dishType}&cuisine${searchObj.cuisine}&diet=${searchObj.dietType}&number=${number}&offset=${offset}`;

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
  }, [searchObj])
  

  
  return (
    <>
      <Container id="recipes-list-container">
        <div className="text-center">
          <p>Total amount or recipes found: <strong>{ totalResults }</strong></p>
        </div>
        <Row xs={2} md={3} className="g-4">
          {recipesData && recipesData.map((recipe) => {
            return <RecipeCard recipe={recipe} id={recipe.id} key={recipe.id}/>
        })}
        </Row>
        
      </Container>
    </>
  )
}

export default RecipesList