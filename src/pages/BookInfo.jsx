import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import Rating from '../ui/Ratings';
import Price from '../ui/Price';
import Book from '../ui/Book';

const BookInfo = ({ books, addToCart, cart }) => {
  const {id} = useParams();
  const book = books.find(book => +book.id === +id);
  const [added, setAdded] = useState(false)


  function addBookToCart(book) {
    setAdded(true);
    addToCart(book)
  }

  function bookExistsonCart(){
    return cart.find(book => book.id === +id)
  }

  return (
    <div className="books__body">
        <main className="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="books__selected--top">
                       <Link to="/books" className="book__link">
                       <FontAwesomeIcon icon="arrow-left" />
                       </Link>
                       <Link to="/books" className="book__link">
                       <h2 className='book__selected--title--top'>Books</h2>
                       </Link>
                    </div>
                    <div className="books__selected">
                      <figure className="books__selected--figure">
                        <img src={book.url} 
                        alt="" 
                        className='book__selected--img'
                        />
                      </figure>
                      <div className="book__selected--description">
                          <h2 className="book__selected--title">{book.title}</h2>
                          <Rating rating={book.rating} />
                          <div className="books__selected--price">
                            <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                          </div>
                        <div className="book__summary">
                          <h3 className="book__summary--title">Summary</h3>
                          <p className="book__summary--para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sapiente deleniti a quibusdam facere! Numquam vero nemo nesciunt, recusandae vel deleniti. 
                            Neque iure similique odit deserunt nobis at ab quasi accusantium.
                            </p>
                          <p className="book__summary--para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sapiente deleniti a quibusdam facere! Numquam vero nemo nesciunt, recusandae vel deleniti. 
                            Neque iure similique odit deserunt nobis at ab quasi accusantium.
                            </p>
                        </div>
                        {bookExistsonCart() || added ? 
                        ( <Link to={'/cart'} className="book__link" >
                        <button className='btn'> Checkout </button></Link>
                          ) :
                         (<button className='btn' onClick={() => addBookToCart(book)}>
                          Add to Cart
                        </button>)
                        }
                      </div>
                    </div>
                </div>
            </div>


            <div className="books__container">
              <div className="row">
                <div className="book__selected--top">
                  <div className="book__selected--title--top">Recommended Books</div>
                 </div>
                  <div className="books">
                    {books
                    .filter((book) => book.rating === 5 && +book.id !== +id)
                    .slice(0,4)
                    .map(book => <Book book={book} key={book.id} />)
                    }
                  </div>
              </div>
            </div>
        </main> 
    </div>
  )
}

export default BookInfo;

