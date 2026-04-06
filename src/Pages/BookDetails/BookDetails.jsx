import React from 'react';
import { useParams } from 'react-router';

const BookDetails = () => {
    const params = useParams();
    console.log(params);
    
    return (
        <div>
            Book details
        </div>
    );
};

export default BookDetails;