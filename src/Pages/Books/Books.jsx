import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const Books = () => {
    
     const {storedBooks, wishList} = useContext(BookContext);
        console.log(storedBooks, wishList, "bookContext");

    return (
        <div className='container mx-auto'>
           <div>
             Read list : {storedBooks.length} <br />
             Wish list : {wishList.length}
           </div>
        </div>
    );
};

export default Books;