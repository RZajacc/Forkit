import { CSSProperties } from 'react'
import { Col, Row } from 'react-bootstrap'
import { commentsType } from '../types/types'

type Props = {
    comment: commentsType,
}

const picStyle: CSSProperties = {
    borderRadius: "50%",
    width: "70px",
    marginTop: "20%",
    marginLeft: "12%",
}

const rowStyle: CSSProperties = {
    margin: "3px",
    borderRadius: "5%",
    backgroundColor: "#FAFAFA"
}

const dateStyle: CSSProperties = {
    fontSize: "0.7rem",
    fontStyle: "italic",
}

// * Helper function to format date (Maybe to move to utils)
    const formatDate = (date: number): string => {
        const formatedDate = new Date(date*1000).toLocaleString();
        return formatedDate
    }

function Comment({comment}: Props) {
  return (
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
  )
}

export default Comment