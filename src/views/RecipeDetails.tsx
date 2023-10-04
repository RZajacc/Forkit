import { useLocation} from "react-router-dom";
import TopSection from "../components/TopSection";
import { Button, Container } from "react-bootstrap";
import { RecipeGeneral } from "../types/types";
import Comments from "../components/Comments";
import { collection, addDoc, query, where, onSnapshot, deleteDoc, doc } from "firebase/firestore"; 
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../config/firebaseConfig";

interface LocationState {
  recipe: RecipeGeneral,
}

function RecipeDetails() {

  const location = useLocation();
  const { recipe } = location.state as LocationState;
  const { user } = useContext(AuthContext);
  const [favs, setFavs] = useState([]);
  const [favID, setFavID] = useState(null);
  
  
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

  const star = {
    width: "25px",
  }

  // *Adding recipe to favourites
  const handleAddFavourite = async () => {
    const fav = {
      userID: user?.uid,
      recipeID: recipe.id,
      recipeTitle: recipe.title,
      ImageUrl: recipe.image,

    }

    if (favID) {
      await deleteDoc(doc(db, "favourites", favID));
      setFavID(null);
    }else {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "favourites"), fav);
    }
  }

  // * Get favourites with live update
    const getFavouritesLive = () => {
        const q = query(collection(db, "favourites"), where("userID", "==", user?.uid), where("recipeID", "==", recipe.id));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          // const comments: commentsType[] = [];
          const favs = [];
        querySnapshot.forEach((doc) => {
          favs.push(doc.data());
          setFavID(doc.id);
        });
        setFavs(favs);
        });
    }

    useEffect(() => {
        getFavouritesLive();      
    }, [])

  return (
    <>
      <TopSection />
      <Container style={containerStyle}>
        <h2 className="text-center">{recipe.title}
          {favs.length != 0 ? (
            <Button variant="info" onClick={handleAddFavourite}>
              <img src="../public/Full_Star.png" alt="empty star" style={star} />
              Add to favourites
            </Button>
          ) : (
            <Button variant="info" onClick={handleAddFavourite}>
              <img src="../public/Empty_Star.png" alt="empty star" style={star} />
              Add to favourites
            </Button>
          )}
        </h2>

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
          {recipe.extendedIngredients.map((ingredient, indRec) => {
            return (
              <li key={indRec}>{ingredient.original} ({ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort})</li> 
              )            
          })}
        </ul>

        <h4 className="text-center" style={sectionsStyle}>Instructions: </h4>
        <ol>
          {recipe.analyzedInstructions[0].steps.map((step, idx) => {
            return <li key={idx}>{step.step}</li>
          })}
        </ol>

        <Comments recipeId={recipe.id} />
        
      </Container>
    </>
  )
}

export default RecipeDetails