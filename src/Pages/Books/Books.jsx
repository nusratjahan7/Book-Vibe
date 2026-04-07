import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Components/LIstedBooks/ReadList';
import WishList from '../../Components/LIstedBooks/WishList';

const Books = () => {
    
     const {readList, wishList} = useContext(BookContext);
        console.log(readList, wishList, "bookContext");

    return (
        <div className='container mx-auto'>
           <div>
             Read list : {readList.length} <br />
             Wish list : {wishList.length}
           </div>
           <div>
            <Tabs>
                 <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                 <TabPanel>
                    <ReadList />
                </TabPanel>

                <TabPanel>
                    <WishList />
                </TabPanel>
            </Tabs>
           </div>
        </div>
    );
};

export default Books;