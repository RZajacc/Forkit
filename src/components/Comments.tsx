import { collection, getDocs } from "firebase/firestore";
import {Container} from "react-bootstrap"
import { db } from "../config/firebaseConfig";
import {CSSProperties, useEffect, useState} from "react"
import Comment from "./Comment";
import { commentsType } from "../types/types";


interface Props {
    recipeId: number;
}

const commentsContainer: CSSProperties = {
    width: "70%",
    marginTop: "5%"
}


function Comments({ recipeId }: Props) {
    
    const [comments, setComments] = useState<commentsType[] | null>(null)

    const getComments = async () => {
        const querySnapshot = await getDocs(collection(db, "Comments"));
        querySnapshot.forEach((doc) => {
            if (parseInt(doc.data().recipeID) === recipeId) {
                setComments(doc.data().comments);
                console.log("Comparison passed")
            }
    });
    }

    useEffect(() => {
        getComments();      
    }, [])
    

  return (
      <>
          <Container style={commentsContainer}>
              <h5>Comments:</h5>
              {comments && comments.map((comment, idx) => {
                  return (
                      <Comment key={idx} comment={comment} />  
                )
              })}
        </Container>
      </>
  )
}

export default Comments