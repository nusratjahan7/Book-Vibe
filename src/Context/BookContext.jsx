import React, { Children, createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({children}) => {

    const [storedBooks, setStoreBooks] = useState([]);

    const handleMarksAsRead = (currentBook) => {
        // step -1 : store book id or store book object
        // step - 2: where to shore
        // step - 3: array or collection
        // step - 4: if the book is already exit show a alert or toast
        // step - 5: if not the and the books array or collection
        console.log(currentBook);
        const isExisted = storedBooks.find(book => book.bookId === currentBook.bookId);
        if(isExisted){
            alert("The book is already exit");
        }
        else{
            setStoreBooks([...storedBooks, currentBook]);
            alert(`${currentBook.bookName} is added to list`)
        }
    }

    const data = {
        storedBooks, setStoreBooks, handleMarksAsRead
    };

    return <BookContext.Provider value={data}>
        {
            children
        }
    </BookContext.Provider>
};

export default BookProvider;