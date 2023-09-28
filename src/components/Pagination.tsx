import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

type Props = {}

function Pagination({ }: Props) {
  
 const moveToPage = (e) => {
    
    let buttonValue = e.target.innerHTML;
    const minVal = 1;
    const maxVal = charInfo.pages;
    
    if (targetPage === minVal && buttonValue === "Next") {
      setTargetPage(targetPage + 1);
    } else if (targetPage != minVal && targetPage != maxVal) {
      if (buttonValue === "Previous") {
        setTargetPage(targetPage - 1);
      } else {
        setTargetPage(targetPage + 1);
      }
    } else if (targetPage === maxVal && buttonValue === "Previous") {
      setTargetPage(targetPage - 1);
    }
  }
  
  return (
    <Container id="pagination">
      <Row className="justify-content-md-around">
        <Col xs={1} >
          <Button  disabled={false} className="pag-button" variant="warning" onClick={moveToPage}>Previous</Button>
        </Col >
        <Col xs={3}><strong>You are currently on page:</strong> <span id="target-page">{targetPage}</span></Col>
        <Col xs={1}>
          <Button disabled={false} className="pag-button" variant="warning" onClick={moveToPage}>Next</Button></Col>
      </Row>
    </Container>
  )
}

export default Pagination