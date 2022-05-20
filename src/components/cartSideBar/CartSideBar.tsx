import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../App';
import { makePrintQueryString } from '../../pages/print/Print';
import './CartSideBar.css';


interface CartSideBarProps {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  setHideSideBarAfterTransition: (b: boolean) => void;
}

export function CartSideBar(props: CartSideBarProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className={`cart-side-bar ${props.expanded ? '' : 'closed'}`}
      onTransitionEnd={(e) => {
        // When transition ends, if the sidebar is closed, tell parent element
        // to remove it from the DOM entirely to prevent its links and buttons
        // from being tabbable.
        if (e.currentTarget.classList.contains('closed')) {
          props.setHideSideBarAfterTransition(true);
        }
      }}>
      <div className='cart-side-bar-content'>
        <button className='cart-side-bar-back-button' onClick={() => props.setExpanded(!props.expanded)} aria-label='Close cart sidebar'>
          <ChevronRightIcon sx={{ fontSize: 40 }} />
        </button>

        <CartContext.Consumer>
          {(cartContext) => {
            return (
              <>
                <h3>Nutrition Interventions</h3>
                {
                  cartContext.cart.nutritionInterventions.size > 0
                    ? Array.from(cartContext.cart.nutritionInterventions).map(
                      ([id, text]) =>
                        <span key={id} className='cart-side-bar-item'>
                          <p className='cart-side-bar-text'>
                            <Link to={`/interventions/${id}`} className='cart-side-bar-link'>
                              {`#${id}`}
                            </Link>
                            {text}
                          </p>
                          <button className='cart-side-bar-remove-item-button' onClick={() => cartContext.removeIntervention(id)} aria-label={`remove intervention ${id} from cart`}>
                            <CloseIcon sx={{ fontSize: 20 }} />
                          </button>
                        </span>
                    )
                    : <p>No nutrition interventions selected</p>
                }

                <h3>Gender Integrations</h3>
                {
                  cartContext.cart.genderIntegrations.size > 0
                    ? Array.from(cartContext.cart.genderIntegrations).map(
                      ([id, text]) =>
                        <span key={id} className='cart-side-bar-item'>
                          <p className='cart-side-bar-text'>
                            <Link to={`/genderIntegrations/${id}`} className='cart-side-bar-link'>
                              {`#${id}`}
                            </Link>
                            {text}
                          </p>
                          <button className='cart-side-bar-remove-item-button' onClick={() => cartContext.removeIntegration(id)} aria-label={`remove integration ${id} from cart`} >
                            <CloseIcon sx={{ fontSize: 20 }} />
                          </button>
                        </span>
                    )
                    : <p>No gender integrations selected</p>
                }
                <span className='cart-side-bar-button-container'>
                  <button
                    className='simple-button'
                    disabled={
                      cartContext.cart.nutritionInterventions.size === 0
                      && cartContext.cart.genderIntegrations.size === 0}
                    onClick={() => navigate('/print?' + makePrintQueryString(
                      {
                        nutritionInterventionIds: Array.from(cartContext.cart.nutritionInterventions.keys()),
                        genderIntegrationIds: Array.from(cartContext.cart.genderIntegrations.keys()),
                      }
                    ))}>
                    Print cart
                  </button>
                  <button className='simple-button' disabled={cartContext.cart.nutritionInterventions.size === 0 && cartContext.cart.genderIntegrations.size === 0} onClick={() => cartContext.clearCart()}>
                    Empty Cart
                  </button>
                </span>
              </>
            );
          }}
        </CartContext.Consumer>
      </div>
    </div>
  );
}