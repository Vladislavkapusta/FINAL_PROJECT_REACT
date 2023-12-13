import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategoriesList,  } from "../../asyncActions/categories"
import CategoriesItem from "../CategoriesItem";
import { Link } from 'react-router-dom';
import s from './CategoriesList.module.css';

function CategoriesList({count}){

    const categories = useSelector(store => store.categories)
    const dispatch = useDispatch()
    console.log(categories)

    
    useEffect(() => {
      dispatch(fetchCategoriesList())
  }, [dispatch])


    return(
        <ul className={s.CategoriesList_bar}>
          {categories.slice(0, count).map((elem) => (
              <CategoriesItem img={elem.image} name={elem.title} id = {elem.id} count = {count}/>
          ))}
        </ul>
    )

}

export default CategoriesList

// import s from './CategoriesList.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchCategoriesList } from '../../asyncActions/categories';
// import { Link } from 'react-router-dom';
 
// function CategoriesList({ length, navBtn }) {
//   const categories = useSelector((store) => store.categories);
//   const dispatch = useDispatch();
 
//   useEffect(() => {
//     if (!categories.length) dispatch(fetchCategoriesList());
//   }, [categories.length, dispatch]);
 
//   return (
//     <div className={s.categories}>
//         <div className={s.title_line}>
//           <h2 className={s.title}>Categories</h2>
//         </div>
//         <ul className={s.category_list}>
//           {categories.slice(0, length).map((elem) => (
//             <li key={elem.id} className={s.category}>
//               <div
//                 style={{
//                   background: `url(http://localhost:3333${elem.image}) no-repeat center center / cover`,
//                   height: 350,
//                   borderRadius: 12,
//                 }}
//               ></div>
//               <p>{elem.title}</p>
//             </li>
//           ))}
//         </ul>
//     </div>
//   );
// }
 
// export default CategoriesList;