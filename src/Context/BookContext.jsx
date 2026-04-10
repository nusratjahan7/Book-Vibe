import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {

    const [readList, setReadList] = useState({});
    const [wishList, setWishList] = useState([]);


    // useEffect(() => {
    //    const getReadListFromLocalDB = ;
    //    console.log(getReadListFromLocalDB);
    // }, []);


    const handleMarksAsRead = (currentBook) => {
        // step -1 : store book id or store book object
        // step - 2: where to shore
        // step - 3: array or collection
        // step - 4: if the book is already exit show a alert or toast
        // step - 5: if not the and the books array or collection

        console.log(currentBook);
        const isExisted = readList.find(book => book.bookId === currentBook.bookId);
        if(isExisted){
            toast.error(`${currentBook.bookName} is already exist`);
        }
        else{
            setReadList([...readList, currentBook]);
            toast.success(`${currentBook.bookName} is added to read list`)
        }
    }

    const handleWishList = (currentBook) => {
        // step -1 : store book id or store book object
        // step - 2: where to shore
        // step - 3: array or collection
        // step - 4: if the book is already exit show a alert or toast
        // step - 5: if not the and the books array or collection
        const isExistInReadList = readList.find((book) => book.bookId === currentBook.bookId);

        if(isExistInReadList){
            toast.error(`${currentBook.bookName} is already in read list`);
            return;
        }

        const isExisted = wishList.find(book => book.bookId === currentBook.bookId);
        if(isExisted){
            toast.error(`${currentBook.bookName} is already exist`);
        }
        else{
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to wish list`)
        }
    }

    

    const data = {
        readList, setReadList, handleMarksAsRead, wishList, setWishList, handleWishList
    };

    return <BookContext.Provider value={data}>
        {
            children
        }
    </BookContext.Provider>
};

export default BookProvider;