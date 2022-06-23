import { Component } from 'react'
import { Container, Row, Col, Carousel, ListGroup } from 'react-bootstrap'
import pastas from '../data/menu.json'

// let's introduce the state object in the Home component!
// you can have a state object potentially in every component! the component though has to be created as a class...

class Home extends Component {
  state = {
    selectedPasta: null, // this is going to be the INITIAL VALUE of selectedPasta
  }
  // it has to be called state! it is a reserved keyword

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col md={6}>
            <Carousel
            // unlock the following onSlide prop in order to get the comments in sync automatically ;)
            //   onSlide={(index) => {
            //     console.log('slides!', index)
            //     this.setState({
            //       selectedPasta: pastas[index],
            //     })
            //   }}
            >
              {
                // map is the react way of dinamically generating content from an array!
                // you're going to map the array and return a piece of content out of every element
                // pasta is one of the objects in the array, one pasta dish at a time!
                pastas.map((pasta) => {
                  return (
                    <Carousel.Item key={pasta.id}>
                      {/* remember to provide a UNIQUE KEY PROP to every element you're returning out of your .map() */}
                      <img
                        className="d-block w-100"
                        src={pasta.image}
                        alt="Third slide"
                        onClick={() => {
                          console.log('image clicked')
                          this.setState({
                            selectedPasta: pasta,
                          })
                        }}
                      />
                      <Carousel.Caption>
                        <h3>{pasta.name}</h3>
                        <p>{pasta.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={6}>
            <ListGroup>
              {/* React is crashing initially since selectedPasta gets an initial value of null :( */}
              {this.state.selectedPasta && // SHORT CIRCUIT, IT'S GOING TO MAP THE COMMENTS JUST IF SELECTEDPASTA IS NOT NULL
                this.state.selectedPasta.comments.map((review) => {
                  return (
                    <ListGroup.Item key={review.id}>
                      {review.comment}
                    </ListGroup.Item>
                  )
                })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
