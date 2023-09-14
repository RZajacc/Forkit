import { Button, Card, Col } from "react-bootstrap"

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

// * Prepared to show details Fetch
const handleSeeMoreButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const targetProp = e.target as HTMLButtonElement;
  console.log(targetProp.value);
}



function RecipeCard({recipe, id}: Props) {
  return (
    <Col key={id}>
     <Card>
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body className="text-center">
          <Card.Title style={cardTitle}>{recipe.title }</Card.Title>
          <Button variant="primary" value={recipe.id} onClick={handleSeeMoreButtonClick}>See more details</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default RecipeCard