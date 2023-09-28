import {useState, MouseEvent} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import "../style/Global.css";

type Props = {
  setOffset: (offset: number) => void,
  offset: number,
}

function Pagination({setOffset, offset}: Props) {
  
  const [counter, setCounter] = useState<number>(1);
 
  
  const moveToPage = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    
   const buttonElement = e.target as HTMLButtonElement;
   const buttonValue = buttonElement.innerHTML;
    
    if (offset === 0 && buttonValue === "Next") {
      setOffset(offset + 6);
      setCounter(counter + 1);
    } else if (offset != 0 && offset != 900) {
      if (buttonValue === "Previous") {
        setOffset(offset - 6);
        setCounter(counter - 1);
      } else {
        setOffset(offset + 6);
        setCounter(counter + 1);
      }
    } else if (offset === 900 && buttonValue === "Previous") {
      setOffset(offset - 6);
      setCounter(counter - 1);
    }
  }
  
  return (
    <Container className='recipe-pagination'>
      <Row className="justify-content-md-around">
        <Col xs={1} >
          <Button  disabled={false} className="pag-button" variant="warning" onClick={moveToPage}>Previous</Button>
        </Col >
        <Col xs={3}><strong>You are currently on page:</strong> <span className="target-page">{counter}</span></Col>
        <Col xs={1}>
          <Button disabled={false} className="pag-button" variant="warning" onClick={moveToPage}>Next</Button></Col>
      </Row>
    </Container>
  )
}

export default Pagination