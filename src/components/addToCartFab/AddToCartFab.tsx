import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import { GenderIntegration } from '../../pages/genderIntegrations/GenderIntegrationTemplate';
import { Intervention } from '../../pages/interventions/InterventionTemplate';
import { getGenderIntegrationTitleFromId } from '../../Utils';
import './AddToCartFab.css';

interface AddToCartFabProps {
  nutritionIntervention?: Intervention,
  genderIntegration?: GenderIntegration,
}

export function AddToCartFab(props: AddToCartFabProps): JSX.Element {
  const [showPrompt, setShowPrompt] = useState(false);

  return (
    <CartContext.Consumer>
      {(cartContext) => {
        return (
          <div>
            <div className='add-to-cart-fab'>
              <button onClick={() => {
                if (props.nutritionIntervention) {
                  cartContext.addIntervention(
                    props.nutritionIntervention.id,
                    props.nutritionIntervention.title
                  );

                  // When a nutrition intervention is added, show a prompt asking whether the user wants to add the related gender integrations, if they are not already in the cart
                  let showPrompt = false;
                  for (const id of props.nutritionIntervention.relatedGenderIntegrationIds) {
                    if (!cartContext.cart.genderIntegrations.has(id)) {
                      showPrompt = true;
                      break;
                    }
                  }
                  setShowPrompt(showPrompt);

                } else if (props.genderIntegration) {
                  cartContext.addIntegration(
                    props.genderIntegration.id,
                    props.genderIntegration.integration
                  );
                }
              }}>
                <AddShoppingCartRoundedIcon />
              </button>
            </div>
            {
              showPrompt && (
                <div className='add-to-cart-prompt'>
                  <p className='no-top-margin'>
                    There are Gender Integrations related to this Nutrition Intervention that are not already in your cart:
                  </p>
                  <ul className='add-to-cart-prompt-ul'>
                    {props.nutritionIntervention?.relatedGenderIntegrationIds
                      .filter((id) => !cartContext.cart.genderIntegrations.has(id))
                      .map(
                        (id, i) =>
                          <li key={i} className='add-to-cart-prompt-li'>
                            <Link to={`/genderIntegrations/${id}`} target='_blank'>
                              {`#${id}`}
                            </Link>
                            <p className='no-top-margin'>{getGenderIntegrationTitleFromId(id)}</p>
                          </li>)}
                  </ul>
                  <p>
                    Would you like to add these to the cart as well?
                  </p>
                  <span className='add-to-cart-prompt-button-container'>
                    <button className='simple-button' onClick={() => {
                      props.nutritionIntervention?.relatedGenderIntegrationIds.forEach((id) => {
                        cartContext.addIntegration(
                          id,
                          getGenderIntegrationTitleFromId(id)
                        );
                      });
                      setShowPrompt(false);
                    }}>
                      Yes
                    </button>
                    <button className='simple-button' onClick={() => setShowPrompt(false)}>No</button>
                  </span>
                </div>
              )
            }
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}