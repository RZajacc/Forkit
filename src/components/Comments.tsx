import { Timestamp, collection, getDocs } from "firebase/firestore";
import { Col, Container, Row } from "react-bootstrap"
import { db } from "../config/firebaseConfig";
import {CSSProperties, useEffect, useState} from "react"

interface commentsType {
    author: string;
    date: Timestamp;
    message: string;
    picUrl: string;
}

interface Props {
    recipeId: number;
}

const commentsContainer: CSSProperties = {
    width: "70%",
    marginTop: "5%"
}

const picStyle: CSSProperties = {
    borderRadius: "50%",
    width: "70px",
    marginTop: "20%",
    marginLeft: "12%",
}

const rowStyle: CSSProperties = {
    // border: "2px solid gray",
    margin: "3px",
    borderRadius: "5%",
    backgroundColor: "#FAFAFA"
}

const dateStyle: CSSProperties = {
    fontSize: "0.7rem",
    fontStyle: "italic",
}


function Comments({ recipeId }: Props) {
    
    const [comments, setComments] = useState<commentsType[] | null>(null)

    const getComments = async () => {
        const querySnapshot = await getDocs(collection(db, "Comments"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            console.log('type of recipeId', recipeId)
            console.log("type of db id", doc.data().recipeID)
            if (parseInt(doc.data().recipeID) === recipeId) {
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
    const formatDate = (date: number): string => {
        const formatedDate = new Date(date*1000).toLocaleString();
        return formatedDate
    }

  return (
      <>
          <Container style={commentsContainer}>
              <h5>Comments:</h5>
              {comments && comments.map((comment, idx) => {
                  return (
                    <div key={idx}>
                        <Row style={rowStyle}>
                              <Col xs lg="2">
                                <img src={comment.picUrl} alt="" style={picStyle}/>
                              </Col>
                              <Col xs lg="4">
                                <p><strong>{comment.author}</strong></p>
                                <p>{comment.message}</p> 
                                <p style={dateStyle}>{formatDate(comment.date.seconds) }</p>      
                              </Col>
                        </Row>
                    </div>
                )
              })}
        </Container>
      </>
  )
}

export default Comments