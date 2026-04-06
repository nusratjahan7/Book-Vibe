import React from 'react';
import { Star } from 'lucide-react';

const BookCard = ({book}) => {
    return (
         <div className="card bg-base-100 shadow-sm">
                 <figure className='p-6 bg-gray-100'>
                <img
                 src={book.image}
                  alt={book.bookName} className='rounded-xl object-cover h-64' />
                </figure>
                 <div className="card-body">
                      <div className='flex items-center gap-2'>
                         {book.tags.map((tag , i)=> <div key={i} className="badge badge-soft badge-success text-green-500 bg-green-100 font-semibold">{tag}</div>) }
                      </div>
                    <h2 className="card-title font1 font-bold text-xl">
                        {book.bookName}
                 </h2>
                 <p className='font-semibold text-lg'>By : {book.author}</p>
                <div className="card-actions justify-between border-t border-t-gray-300 border-dashed pt-4">
                <div className="badge text-gray-500 font-semibold">{book.category}</div>
                <div className="badge text-gray-500 font-semibold">{book.rating} <Star/></div>
                    </div>
                    </div>
                    </div>
    );
};

export default BookCard;