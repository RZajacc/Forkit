import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap"
import { ChangeEvent, useState } from "react";

import "../style/SearchBar.css"

interface Props {
  setSearchVal: (searchVal:string) => void,
  setDishType: (dishType:string) => void,
  setCuisine: (cuisine:string) => void,
  setDietType: (dietType:string) => void,
}

function SearchBar({setSearchVal, setDishType, setCuisine, setDietType} : Props) {

  
  // * Values to prefill select boxes
  const availableCuisines = ['African', 'Asian', 'American', 'British', 'Cajun',
    'Caribbean', 'Chinese', 'Eastern European', 'European', 'French', 'German',
    'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American',
    'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese'];
  
  const availableDishTypes = ['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread',
    'breakfast', 'soup', 'beverage', 'sauce', 'marinade', 'fingerfood', 'snack', 'drink']
  
  const availableDietTypes = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian',
    'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Low FODMAP', 'Whole30']
  
  const [tempSearchVal, setTempSearchVal] = useState<string>('')
  

  const handleSearchValue = (e : ChangeEvent<HTMLInputElement>) => {
    setTempSearchVal(e.target.value);
  }

  const handleSearchButtonClick = () => {
    setSearchVal(tempSearchVal)
  }

  const handleDishType = (e : ChangeEvent<HTMLSelectElement>) => {
    setDishType(e.target.value);
  }

   const handleCuisineType = (e : ChangeEvent<HTMLSelectElement>) => {
     setCuisine(e.target.value);    
  }

  const handleDietType = (e : ChangeEvent<HTMLSelectElement>) => {
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
                  onChange={handleSearchValue}
                />
                  <Button variant="warning" id="button-addon1" onClick={handleSearchButtonClick}>
                    Search
                  </Button>
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