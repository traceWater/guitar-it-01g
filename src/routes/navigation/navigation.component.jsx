import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as GuitarItLogo } from '../../assets/GuitarsIt.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { 
    NavigationContainer,
    LogoContainer,
    NavLinksContainer,
    NavLink
} from './navigation.styles.jsx';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <GuitarItLogo />
            </LogoContainer>
            <NavLinksContainer>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                currentUser ?
                <NavLink as='span' onClick={signOutUser}>
                    Sign Out
                </NavLink> 
                    :
                <NavLink to='/auth'>
                    SIGN IN
                </NavLink>
                }
                <CartIcon />
            </NavLinksContainer>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;