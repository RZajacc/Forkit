import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { userFavs } from "../types/types"

type Props = {
  recipe: userFavs,
}


function RecipeCardDashboard({ recipe }: Props) {
  return (
    <Col key={recipe.recipeID}>
      <Card className="cardStyle">
        <Card.Img variant="top" src={recipe.ImageUrl} />
        <Card.Body className="text-center">
          <Card.Title className="cardTitle">{recipe.recipeTitle}</Card.Title>
          <Link to={`${recipe.recipeID}`} className="linkStyle">See more details</Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default RecipeCardDashboard