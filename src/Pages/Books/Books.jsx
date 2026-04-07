import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Components/LIstedBooks/ReadList';
import WishList from '../../Components/LIstedBooks/WishList';

const Books = () => {
    
     const {readList, wishList} = useContext(BookContext);
       
     const [sortingType, setSortingType] = useState("");
     
     

    return (
        <div className='container mx-auto'>
           <div>
             Read list : {readList.length} <br />
             Wish list : {wishList.length}
           </div>

        <div className='flex items-center justify-center'>
            <div className="dropdown dropdown-bottom dropdown-center">
             <div tabIndex={0} role="button" className="btn m-1">Short By: {sortingType} ⬇️</div>
         <ul tabIndex="-1" className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm bg-gray-100">
            <li onClick={() => setSortingType('rating')}><a>Rating</a></li>
            <li onClick={() => setSortingType('pages')}><a>Number of pages</a></li>
         </ul>
        </div>
        </div>

           <div>
            <Tabs>
                 <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                 <TabPanel>
                    <ReadList sortingType={sortingType} />
                </TabPanel>

                <TabPanel>
                    <WishList sortingType={sortingType} />
                </TabPanel>
            </Tabs>
           </div>
        </div>
    );
};

export default Books;