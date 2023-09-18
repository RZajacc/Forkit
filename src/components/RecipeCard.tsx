import {Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

type Props = {
  recipe: {
    id: number,
    title: string,
    image: string,
  },
  id: number,
}

const cardTitle = {
  fontSize: "1.0rem",
}

const linkStyle = {
  textDecoration: "none",
  color: "white",
  backgroundColor: '#6FC643',
  borderRadius: '7%',
  padding: "5px",
}



function RecipeCard({recipe, id}: Props) {
  return (
    <Col key={id}>
     <Card>
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body className="text-center">
          <Card.Title style={cardTitle}>{recipe.title}</Card.Title>
          <Link to={`${recipe.id}`} style={linkStyle} state={{recipe: recipe}}>See more details</Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default RecipeCard