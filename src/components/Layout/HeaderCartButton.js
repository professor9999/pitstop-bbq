import React , { useContext , useEffect , useState}  from 'react'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'


const HeaderCartButton = (props) => {

    const [btnHigh , setBtnHigh] = useState(false);

    const cartCtx = useContext(CartContext);
    
    const { items } = cartCtx
    const numberOfCartItems = items.reduce( ( currNumber , item ) => {
        return currNumber + item.amount        
    } , 0 )



    const btnClasses = `${classes.button} ${btnHigh ? classes.bump : ''}`    


    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnHigh(true);

        const timer = setTimeout(() => {
            setBtnHigh(false)
        } , 300)

        return () => {
            clearTimeout(timer)
        }

    } , [items])

    return (
        <button className = {btnClasses} onClick = {props.onClick} >
            <span className = {classes.icon}>
                <CartIcon />
            </span>
            <span> Cart </span>
            <span className = {classes.badge}> {numberOfCartItems} </span>
        </button>
    )
}



export default HeaderCartButton
