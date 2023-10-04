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
  fontSize: "0.8rem",
}

const linkStyle = {
  textDecoration: "none",
  color: "white",
  backgroundColor: '#6FC643',
  borderRadius: '7%',
  padding: "5px",
}


const cardStyle = {
  marginBottom: "15px",
}


function RecipeCardDashboard({recipe, id}: Props) {
  return (
    <Col key={id}>
     <Card style={cardStyle}>
        <Card.Img variant="top" src={recipe.ImageUrl} />
        <Card.Body className="text-center">
          <Card.Title style={cardTitle}>{recipe.recipeTitle}</Card.Title>
          <Link to={`${recipe.id}`} style={linkStyle}>See more details</Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default RecipeCardDashboard