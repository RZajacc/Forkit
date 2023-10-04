import { useParams} from "react-router-dom";
import TopSection from "../components/TopSection";
import { Container } from "react-bootstrap";
import { RecipeGeneral } from "../types/types";
import Comments from "../components/Comments";
import {useEffect, useState } from "react";


function FavRecipeDetails() {

  const params = useParams();
  const recipeID = parseInt(params.id);
  const [recipeData, setRecipeData] = useState<RecipeGeneral | null>(null)

  console.log(typeof recipeID);
  
  // * ------ ELEMENTS STYLES -------------
  const nutritionStyle = {
    border: "1px solid black",
    padding: '3px',
    borderRadius: '42%',
  }

  const sectionsStyle = {
    marginTop: '20px',
  }

  const containerStyle = {
    marginBottom: '75px',
  }


  const fetchSingleRecipe = async () => {
    
    // * Prepare link
    // const apiKey = '72af2c7b661040b7a5f1bc928fa61a0e';
    const apiKey = "df7b0368786144ddad91486133f4e77c";
    const url = `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${apiKey}`;
    
    try {
      // * ----- FETCH ----------------
      const response = await fetch(url);
      const data = await response.json();
      // * ----- ASSIGN VALUES ----------
      const recipeData = data as RecipeGeneral;
      console.log(recipeData);
      // * ----- SET USESTATES ------------
      setRecipeData(recipeData);
    } catch (error) {
      console.log("Error --->", error);
   }
  }
  
  useEffect(() => {
    fetchSingleRecipe()
  }, [])
  

  return (
    <>
      <TopSection />
      <Container style={containerStyle}>
        <h2 className="text-center">{recipeData?.title}</h2>

        <p className="text-center">
          <b>Health score: </b><span style={nutritionStyle}>{recipeData?.healthScore}</span>
          <b> Ready in (minutes): </b>  <span style={nutritionStyle}>{recipeData?.readyInMinutes}</span>
          <b> Servings: </b>  <span style={nutritionStyle}>{recipeData?.servings}</span>
          <b> Sustainable: </b>  <span style={nutritionStyle}>{recipeData?.sustainable ? 'Yes': 'No' }</span>
        </p>
        
        <div className="text-center">
          <img src={recipeData?.image} width={"450px"}/>
        </div>
        
        <h4 className="text-center" style={sectionsStyle}>Ingredient list:</h4>
        <ul>
          {recipeData?.extendedIngredients.map((ingredient, indRec) => {
            return (
              <li key={indRec}>{ingredient.original} ({ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort})</li> 
              )            
          })}
        </ul>

        <h4 className="text-center" style={sectionsStyle}>Instructions: </h4>
        <ol>
          {recipeData?.analyzedInstructions[0].steps.map((step, idx) => {
            return <li key={idx}>{step.step}</li>
          })}
        </ol>

        <Comments recipeId={recipeID} />
        
      </Container>
    </>
  )
}

export default FavRecipeDetails