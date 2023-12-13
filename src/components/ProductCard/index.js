import s from './ProductCard.module.css';

function ProductCard({img, title, id, price, discount_price}){

  const discountPercentage = '-' + Math.ceil(((price - discount_price) / price) * 100)+ '%';
  console.log(discountPercentage)

    return(

            <li key={id} className={s.ProductCard_card}>
              <div
                style={{
                  background: `url(http://localhost:3333${img}) lightgray 50% / cover no-repeat`,
                  height: '284px',
                  width: '316px',
                  alignSelf: 'stretch',
                  borderBottom: '1px solid var(--grey-divider, #DDD)',
                  position: 'relative'
                }} 
              > <div className={s.ProductCard_Sale}>{discountPercentage}</div> </div>
              <div className={s.ProductCard_InfoBox}>
              <p className={s.ProductCard_Name}>{title}</p>
              <div className={s.ProductCard_PriceBox}>

              <div className={s.ProductCard_Price_Actual}>${price}</div>
              <div className={s.ProductCard_Price_Old}>${discount_price}</div>

              </div>

              </div>
            </li>
    )

}

export default ProductCard