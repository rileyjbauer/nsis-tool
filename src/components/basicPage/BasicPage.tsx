import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import TanagerMainLogo from '../../img/TanagerMainLogo.png';
import { ArrowNavBar } from '../arrowNavBar/ArrowNavBar';
import { CartSideBar } from '../cartSideBar/CartSideBar';
import './BasicPage.css';

interface BasicPageProps {
  title?: string;
  content?: JSX.Element;
  navForward?: string;
  navBackward?: string;
}

export function BasicPage(props: BasicPageProps) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [sideBarExpanded, setSideBarExpanded] = useState(false);
  // This state variable is used to allow the sidebar to transition in
  // and out while also removing it entirely from the DOM after it hides itself
  // primarily for accessibility reasons.
  const [hideSideBarAfterTransition, setHideSideBarAfterTransition] = useState(true);

  return (
    <div>
      <div className='header-bar'>
        <span className='title-bar'>
          <a href='https://tanagerintl.org' className='header-bar-tanager-logo' >
            <img src={TanagerMainLogo} alt='tanager, an ACDI/VOCA affiliate' />
          </a>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h1 className='header-bar-title'>NSIS Tool</h1>
          </Link>
        </span>
        {!menuExpanded && (
          <div className='nav-bar'>
            <Link to='/mainNav'>Start Over</Link>
            <Link to='/interventionsList'>All Nutrition Interventions</Link>
            <Link to='/genderIntegrationsList'>All Gender Integrations</Link>
          </div>
        )}

        <div className='header-bar-nav-container'>
          <CartContext.Consumer>
            {(cartContext) => {
              return (
                <div className='header-bar-cart-container'>
                  {cartContext.cart.nutritionInterventions.size + cartContext.cart.genderIntegrations.size}
                  <button
                    className='header-bar-cart-button'
                    aria-label='Open cart sidebar'
                    onClick={() => {
                      if (!sideBarExpanded) {
                        setHideSideBarAfterTransition(sideBarExpanded);
                      }
                      // We wait 10ms here so that
                      // setHideSideBarAfterTransition can cause the sidebar to
                      // be recreated before its state is set to 'expanded'
                      // This allows the sidebar to exist briefly off the side
                      // of the screen before sliding back into view, instead
                      // of just immediately appearing in its fully open state
                      setTimeout(() => setSideBarExpanded(!sideBarExpanded), 10);
                    }}>
                    <ShoppingCartOutlinedIcon />
                  </button>
                </div>
              );
            }}
          </CartContext.Consumer>

          <button className='menu-button' onClick={() => setMenuExpanded(!menuExpanded)} aria-label='Expand menu' >
            <MenuIcon />
          </button>

          {/* By placing this here as well as above and controlling via the menuExpanded state variable, we allow the menu items to be reached in the logical tabbing order */}
          {menuExpanded && (
            <div className='nav-bar menu-expanded'>
              <Link to='/mainNav'>Start Over</Link>
              <Link to='/interventionsList'>All Nutrition Interventions</Link>
              <Link to='/genderIntegrationsList'>All Gender Integrations</Link>
            </div>
          )}

        </div>

        {!hideSideBarAfterTransition && (
          <CartSideBar
            expanded={sideBarExpanded}
            setExpanded={setSideBarExpanded}
            setHideSideBarAfterTransition={setHideSideBarAfterTransition}
          />
        )}

      </div>
      <div className='page-content' onClick={() => setMenuExpanded(false)}>
        {props.title && <h1 className='content-title'>{props.title}</h1>}
        {props.content}
      </div>
      <div className='bottom-spacer' />
      <ArrowNavBar back={props.navBackward} forward={props.navForward} />
    </div>
  );
}
