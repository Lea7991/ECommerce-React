import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Rating from './Ratings';
import Price from './Price';


const Book = ( {book} ) => {
    return(
        <div className="book">
            <Link to={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img 
                    src={book.url} 
                    className='book__img'
                    alt=''
                    />
                </figure> 
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className='book__title--link'>
                {book.title}
                </Link>
            </div>
            <div className="book__ratings">
                <Rating rating={book.rating} />
                <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
            </div>
           
        </div>
    )
}

export default Book;