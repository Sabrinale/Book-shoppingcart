"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../../actions/booksActions';
import {bindActionCreators} from 'redux';
import {Carousel, Grid, Col, Row, Button} from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';


class BooksList extends React.Component{
  componentDidMount(){
    this.props.getBooks()
  }
  render(){

    console.log("HOW STATE LOOKS LIKE", this.props.state);
    console.log("HOW STATE.BOOKS LOOKS LIKE", this.props.stateBooks);
    console.log("HOW STATE.BOOKS.BOOKS LOOKS LIKE", this.props.stateBooksBooks);

    const booksList = this.props.books.map(function(booksArr){
      return(
        <Col xs={12} sm={6} md={4} key={booksArr._id}>
          <BookItem
                _id= {booksArr._id}
                title={booksArr.title}
                description={booksArr.description}
                images={booksArr.images}
                price={booksArr.price}/>
        </Col>
      )
    })
    return(
        <Grid>
          <Row>
            <Carousel>
              <Carousel.Item>
                <img width={900} height={300} alt="900x300" src="/images/home1.jpg"/>
                <Carousel.Caption>
                  <h3>Books are a uniquely portable magic.</h3>
                  <p>If you only read the books that everyone else is reading, you can only think what everyone else is thinking.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={300} alt="900x300" src="/images/home2.jpg"/>
                <Carousel.Caption>
                  <h3>A book is a dream that you hold in your hand.</h3>
                  <p>
                    You can’t buy happiness, but you can buy books and that’s kind of the same thing..</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
          <Row>
            <Cart />
          </Row>
          <Row style={{marginTop:'15px'}}>
              {booksList}
          </Row>
        </Grid>
    )
  }
}
function mapStateToProps(state){
  return{
    books: state.books.books,
    state: state,
    stateBooks: state.books,
    stateBooksBooks: state.books.books
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getBooks:getBooks
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
