import { collection, getDocs } from "firebase/firestore";
import { Container } from "react-bootstrap"
import { db } from "../config/firebaseConfig";
import {useEffect, useState} from "react"

function Comments({ recipeId }) {
    
    const [comments, setComments] = useState([])

    const getComments = async () => {
        const querySnapshot = await getDocs(collection(db, "Comments"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            console.log('type of recipeId', recipeId)
            console.log("type of db id", doc.data().recipeID)
            if (parseInt(doc.data().recipeID) === parseInt(recipeId)) {
                setComments(doc.data().comments);
                console.log("Comparison passed")
            }
            // console.log("Doc-->", doc.data().comments[0].author);
            // console.log(`${doc.id} => ${doc.data()}`);
    });
    }

    useEffect(() => {
        getComments();      
    }, [])
    
    console.log("Comments", comments)

  return (
      <>
          <Container>
              <h5>Comments</h5>
              {comments.map((comment) => {
                  return (
                      <>
                          <div>
                            <p>Posted by: {comment.author}</p>
                            <p>Msg text: {comment.message}</p>    
                          </div>
                      </>
                )
              })}
        </Container>
      </>
  )
}

export default Comments