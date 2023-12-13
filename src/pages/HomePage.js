import CategoriesForHome from "../components/CategoriesForHome"
import DiscountAD from "../components/DiscountAD"
import DiscountCoupon from "../components/DiscountCoupon";
import SaleForHome from "../components/SaleForHome";



function HomePage(){

    return(
    <>
                <DiscountAD/>
                <CategoriesForHome/>
                <DiscountCoupon/>
                <SaleForHome/>
    </>

    )
}

export default HomePage