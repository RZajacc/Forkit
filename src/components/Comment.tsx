import { Col, Row } from 'react-bootstrap'
import { commentsType } from '../types/types'
import { formatDate } from '../utils/Utils'
import "../style/Comment.css"

type Props = {
    comment: commentsType,
}


function Comment({comment}: Props) {
  return (
     <Row className="rowStyle">
        <Col xs lg="2">
        <img src={comment.picUrl} alt="" className="picStyle"/>
        </Col>
        <Col xs lg="4">
        <p><strong>{comment.author}</strong></p>
        <p>{comment.message}</p> 
        <p className="dateStyle">{formatDate(comment.date.seconds) }</p>      
        </Col>
    </Row>
  )
}

export default Comment