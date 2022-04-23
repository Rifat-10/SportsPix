import React from 'react';

import image1 from "../../Images/notfound.png";


const NotFound = () => {
    return (
        <div>
            <img src={image1} alt='...'srcset="" height={500} className='w-50' />
            <h1 className='fw-bold text-danger text-center p-5 m-5'>404 Page Not Found</h1>
        </div>
    );
};

export default NotFound;