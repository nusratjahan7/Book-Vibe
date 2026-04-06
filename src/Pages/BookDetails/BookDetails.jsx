import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';

// const hookPromise = fetch('/booksData.json').then(res => res.json())

const BookDetails = () => {
    const { bookId } = useParams();
    console.log(bookId, "Book Id");

    // const books = use(hookPromise);

    const books = useLoaderData();   
    console.log(books, "books");

    const expectedBook = books.find((book) => book.bookId == bookId);
    console.log(expectedBook, "expectedBook");

    const {bookName, yearOfPublishing, publisher, tags, category, rating, totalPages, review, image, author} = expectedBook;
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3  bg-base-100 md:h-[80vh] w-11/12 mx-auto space-y-4 pt-4 ">
    <figure className='flex items-center justify-center bg-gray-100 p-3 rounded-2xl'>
    <img
      src={image}
      alt={bookName} className='h-[80vh] rounded-2xl' />
        </figure>
        <div className="card-body space-y-2 md:col-span-2 ">
            <h2 className="card-title text-3xl font-bold font1">{bookName}</h2>
            <p className='font-semibold'>By : {author}</p>
            <p className='border-y font-semibold border-y-gray-200 py-2'>{category}</p>
            <p><span className='font-bold'>Review :</span> {review}</p>
            <p className='font-bold border-b pb-4 border-b-gray-200'> Tags :  
            <span className='ml-2'>
            {
                tags.map((tag , i)=> <div key={i} className="badge badge-soft badge-success text-green-500 bg-green-100 font-semibold">{tag}</div>)
            }
            </span>
            </p>
            <div className='grid grid-cols-2 lg:w-1/2'>
                <div className='space-y-2 text-gray-600 font-medium'>
                <p>Number of Pages:</p>
                <p>Publisher:</p>
                <p>Year of Publishing:</p>
                <p>Rating:</p>
                </div>
                <div className='space-y-2 font-bold'>
                    <p>{totalPages}</p>
                    <p>{publisher}</p>
                    <p>{yearOfPublishing}</p>
                    <p>{rating}</p>

                </div>
            </div>
        <div className="card-actions mt-2">
            <button className="btn  border-gray-300">Read</button>
            <button className="btn btn-primary">Wishlist</button>
         </div>
        </div>
    </div>
    );
};

export default BookDetails;