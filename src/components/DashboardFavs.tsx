import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Col, Container, Row } from "react-bootstrap"
import { db } from "../config/firebaseConfig";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import RecipeCardDashboard from "./RecipeCardDashboard";


function DashboardFavs() {

    const { user } = useContext(AuthContext);
    const [userFavs, setUserFavs] = useState([])
      
    // * Get favourites with live update
    const getFavouritesLive = () => {
        const q = query(collection(db, "favourites"), where("userID", "==", user?.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          // const comments: commentsType[] = [];
          const userFavs = [];
        querySnapshot.forEach((doc) => {
            userFavs.push(doc.data());
        });
        setUserFavs(userFavs);
        });
    }

    useEffect(() => {
        getFavouritesLive();      
    }, [])


    const noFavsText = {
        marginBottom: "40px",
    }

  return (
      <>
          <Container>
                <Row className="justify-content-md-center" >
                  <Col xs lg="5">
                      {userFavs.length == 0 ?  <h4 style={noFavsText}>...No favourites yet...</h4> : ''}
                  </Col>
              </Row>
               <Row xs={2} md={4} className="g-4">
                  {userFavs && userFavs.map((recipe) => {
                    console.log(recipe)
                    return <RecipeCardDashboard recipe={recipe} id={recipe.recipeID} key={recipe.recipeID}/>
                })}
                </Row>
        </Container>
      </>
  )
}

export default DashboardFavs