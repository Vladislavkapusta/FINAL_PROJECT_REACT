import React from 'react';
import { Link } from 'react-router-dom';
import s from './SaleForHome.module.css'
import SalesList from '../SalesList';

const SaleForHome = () => {
  return (
    <div className={`${s.SaleForHome_Container}`}>
        <header className= {`${s.SaleForHome_Head}`}>
            <h2 className= {`${s.SaleForHome_Head_Title}`}>Sale</h2>
            <div className= {`${s.SaleForHome_Btn_Area}`}>
                <div className= {`${s.SaleForHome_Head_Line}`}></div>
                <Link className= {`${s.SaleForHome_Nav_Button}`} to="/categories">All Sales</Link>
            </div>
        </header>
        <SalesList/>
    </div>

  );
};

export default SaleForHome;