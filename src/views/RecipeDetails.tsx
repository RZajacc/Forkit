import { useLocation} from "react-router-dom";
import TopSection from "../components/TopSection";
import { Container } from "react-bootstrap";
import { RecipeGeneral } from "../types/types";

interface LocationState {
  recipe: RecipeGeneral,
}

function RecipeDetails() {

  const location = useLocation();
  const { recipe } = location.state as LocationState;

  
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

  
  return (
    <>
      <TopSection />
      <Container style={containerStyle}>
        <h2 className="text-center">{recipe.title}</h2>
        <p className="text-center">
          <b>Health score: </b><span style={nutritionStyle}>{recipe.healthScore}</span>
          <b> Ready in (minutes): </b>  <span style={nutritionStyle}>{recipe.readyInMinutes}</span>
          <b> Servings: </b>  <span style={nutritionStyle}>{recipe.servings}</span>
          <b> Sustainable: </b>  <span style={nutritionStyle}>{recipe.sustainable ? 'Yes': 'No' }</span>
        </p>
        
        <div className="text-center">
          <img src={recipe.image} width={"450px"}/>
        </div>
        
        <h4 className="text-center" style={sectionsStyle}>Ingredient list:</h4>
        <ul>
          {recipe.extendedIngredients.map((ingredient, idx) => {
            return (
              <>
              
              <li key={idx}>{ingredient.original} ({ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort})</li>
              </>
              )            
          })}
        </ul>

        <h4 className="text-center" style={sectionsStyle}>Instructions: </h4>
        <ol>
          {recipe.analyzedInstructions[0].steps.map((step) => {
            return <li>{step.step}</li>
          })}
        </ol>
        
      </Container>
    </>
  )
}

export default RecipeDetails