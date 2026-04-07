import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCard from '../../UI/BookCard';

const ReadList = () => {
    const {readList, wishList} = useContext(BookContext);
            console.log(readList, wishList, "bookContext");

            if(readList.length === 0){
                return <div className="flex items-center justify-center min-h-[60vh] rounded-2xl bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-sm w-full border border-gray-100">
        
        {/* Icon */}
        <div className="text-5xl mb-4">📚</div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          No Books Found
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mb-6">
          You haven't added any books yet. Start adding your favorites!
        </p>

        {/* Button */}
        <button onClick={() => (window.location.href = "/")} className="px-5 py-2 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition">
          Add Book
        </button>

      </div>
    </div>
            }

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 container mx-auto'>
            {
                readList.map((book, i) => <BookCard key={i} book={book} />)
            }
        </div>
    );
};

export default ReadList;