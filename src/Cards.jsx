import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import "./App.css"
function Cards () {
  return (
    <Card className='card' style={{ width: '18rem' , display:'flex', justifyContent:'center', alignItems:'center', margin:'auto', top:'100px'}}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default  Cards;