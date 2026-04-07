import React, { use, useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { motion } from "framer-motion";
import { BookContext } from '../../Context/BookContext';
// const hookPromise = fetch('/booksData.json').then(res => res.json())

const BookDetails = () => {
    const { bookId } = useParams();

    // const books = use(hookPromise);

    const books = useLoaderData();   

    const expectedBook = books.find((book) => book.bookId == bookId);
    

    const {bookName, yearOfPublishing, publisher, tags, category, rating, totalPages, review, image, author} = expectedBook;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[]);

    const {handleMarksAsRead, handleWishList} = useContext(BookContext);
    


    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3  bg-base-100 md:h-min-[80vh]  w-11/12 mx-auto space-y-4 pt-4 overflow-hidden">
    <motion.figure 
    initial={{opacity: 0, x:-30}}
    animate={{opacity: 1, x: 0}}
    transition={{duration: 1.1}}

    className='flex items-center justify-center bg-gray-100 py-3 rounded-2xl'>
    <img
      src={image}
      alt={bookName} className='h-[70vh] rounded-2xl' />
        </motion.figure>
        <motion.div
        initial={{opacity: 0, x:30}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1.1}}

        className="card-body space-y-2 md:col-span-2 ">
            <h2 className="card-title text-3xl font-bold font1">{bookName}</h2>
            <p className='font-semibold'>By : {author}</p>
            <p className='border-y font-semibold border-y-gray-200 py-2'>{category}</p>
            <p><span className='font-bold'>Review :</span> {review}</p>
            <div className='font-bold border-b pb-4 border-b-gray-200'> Tags :  
            <span className='ml-2'>
            {
                tags.map((tag , i)=> <div key={i} className="badge badge-soft badge-success text-green-500 bg-green-100 font-semibold">{tag}</div>)
            }
            </span>
            </div>
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
            <button onClick={() => handleMarksAsRead(expectedBook)} className="btn  border-gray-300">Mark is Read</button>
            <button onClick={() => handleWishList(expectedBook)} className="btn btn-primary">Wishlist</button>
         </div>
        </motion.div>
    </div>
    );
};

export default BookDetails;