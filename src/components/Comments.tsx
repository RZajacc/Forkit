import { addDoc, collection, onSnapshot, query, where} from "firebase/firestore";
import {Button, Container} from "react-bootstrap"
import { db } from "../config/firebaseConfig";
import {ChangeEvent, useContext, useEffect, useState} from "react"
import Comment from "./Comment";
import { commentsType } from "../types/types";
import "../style/Comment.css"
import { AuthContext } from "../context/AuthContext";


interface Props {
    recipeId: number;
}


function Comments({ recipeId }: Props) {
    
    const [comments, setComments] = useState<commentsType [] | null>(null);
    const [newMessage, setNewMessage] = useState("");
    const {user} = useContext(AuthContext)

    const handleMessageInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value);
    }

    const submitMessage = async () => {
        const authorData = user ? user.displayName ? user.displayName : user.email : "No user";
        const authorImage = user ? user.photoURL ? user.photoURL : "../public/noUser.png" : "No user";
        const newChatMsg: commentsType = {
            authorID: user!.uid,
            recipeID: recipeId,
            author: authorData!,
            picUrl: authorImage,
            message: newMessage,
            date: new Date(),
        }
        
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "Comments"), newChatMsg);
        // console.log(docRef);
    }


    // * Get messages with live update
    const getCommentsLive = () => {
        const q = query(collection(db, "Comments"), where("recipeID", "==", recipeId));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const comments: commentsType[] = [];
        querySnapshot.forEach((doc) => {
            comments.push(doc.data() as commentsType);
        });
        setComments(comments);
        });
    }
    
    console.log(comments)

    useEffect(() => {
        getCommentsLive();      
    }, [])
    

  return (
      <>
        <Container className="commentsContainer">
              <h5>Comments:</h5>
               {comments && comments.map((comment, idx) => {
                return <Comment key={idx} comment={comment} />  
            })}
              <h5>Write a new comment:</h5>
              <input type="text" onChange={handleMessageInput} />
              <Button onClick={submitMessage}>Submit</Button>
        </Container>
      </>
  )
}

export default Comments