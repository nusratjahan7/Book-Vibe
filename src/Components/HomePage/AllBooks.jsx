import React, { use } from 'react';
import BookCard from '../../UI/BookCard';

const hookPromise = fetch('/booksData.json').then(res => res.json())

const AllBooks = () => {

    const books = use(hookPromise);
    
    return (
        
        <div className='my-12 w-11/12 mx-auto'>
            <h2 className='font-bold font1 text-3xl text-center'>Books</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-9'>
          {
            books.map((book, ind) => {
                return (
               <BookCard key={ind} book={book} />
                )
            })
          }
          </div>
        </div>
    );
};

export default AllBooks;