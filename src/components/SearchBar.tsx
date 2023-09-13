import { Container, Row, Col, InputGroup, Form} from "react-bootstrap"

import "../style/SearchBar.css"

function SearchBar({setDishType, setCuisine, setDietType}) {

  
  // * Values to prefill select boxes
  const availableCuisines = ['African', 'Asian', 'American', 'British', 'Cajun',
    'Caribbean', 'Chinese', 'Eastern European', 'European', 'French', 'German',
    'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American',
    'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese'];
  
  const availableDishTypes = ['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread',
    'breakfast', 'soup', 'beverage', 'sauce', 'marinade', 'fingerfood', 'snack', 'drink']
  
  const availableDietTypes = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian',
    'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Low FODMAP', 'Whole30']
  
  

  const handleDishType = (e) => {
    setDishType(e.target.value);
  }

   const handleCuisineType = (e) => {
     setCuisine(e.target.value);    
  }

  const handleDietType = (e) => {
    setDietType(e.target.value);
  }


  return (
    <Container fluid id="search-container">
      <Row className="justify-content-md-center">
        <Col xs={10}>
          <Row className="justify-content-md-center" id="search-boxes-container" xs={2} lg={4}>
            <Col >
               <InputGroup>
                <InputGroup.Text id="search-val">&#128269;</InputGroup.Text>
                <Form.Control
                  placeholder="Type here..."
                  aria-label="search-val"
                  aria-describedby="search-val"
                />
              </InputGroup>
            </Col>

            <Col >
               <Form.Select aria-label="dish-type-select" onChange={handleDishType}>
                <option value={'all'}>Select dish type</option>
                {availableDishTypes.map((type, idx) => {
                  return <option key={idx} value={type}>{type}</option>
                })}
              </Form.Select>
            </Col>

            <Col >
               <Form.Select aria-label="cousine-select" id="select-box" onChange={handleCuisineType}>
                <option value={'all'}>Choose cuisine</option>
                {availableCuisines.map((cousine, idx) => {
                  return <option key={idx} value={cousine}>{cousine}</option>
                })}
              </Form.Select>
            </Col>

            <Col >
               <Form.Select aria-label="diet-type-select" onChange={handleDietType}>
                <option value={'all'}>Diet type</option>
                {availableDietTypes.map((type, idx) => {
                  return <option key={idx} value={type}>{type}</option>
                })}
              </Form.Select>
            </Col>
            
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar