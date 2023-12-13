import React from 'react';
import s from './DiscountAD.module.css'


const DiscountAD = () => {
    return (
        <div className={`${s.AD_bar}`}>
            <div className={`${s.Discount_layout}`}>
                 <h1 className={`${s.Discount_title}`}>Amazing Discounts on Garden Products!</h1>
                 <button className={`${s.Discount_button}`}><p className={`${s.Discount_button_text}`}>Check out</p></button>
            </div>
           
        </div>
    );
};

export default DiscountAD;