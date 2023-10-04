import { useParams} from "react-router-dom";
import TopSection from "../components/TopSection";
import { Button, Container } from "react-bootstrap";
import { RecipeGeneral } from "../types/types";
import Comments from "../components/Comments";
import {useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";


function FavRecipeDetails() {

  const params = useParams();
  const recipeID = parseInt(params.id!);
  const [recipeData, setRecipeData] = useState<RecipeGeneral | null>(null);
  const { user } = useContext(AuthContext);
  const [favs, setFavs] = useState([]);
  const [favID, setFavID] = useState(null);

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

   const star = {
    width: "25px",
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

   // *Adding recipe to favourites
  const handleAddFavourite = async () => {
    const fav = {
      userID: user?.uid,
      recipeID: recipeID,
      recipeTitle: recipeData?.title,
      ImageUrl: recipeData?.image,

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
        const q = query(collection(db, "favourites"), where("userID", "==", user?.uid), where("recipeID", "==", recipeID));
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
    fetchSingleRecipe();
    getFavouritesLive();
    
  }, [])
  


  return (
    <>
      <TopSection />
      <Container style={containerStyle}>
        <h2 className="text-center">{recipeData?.title}
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