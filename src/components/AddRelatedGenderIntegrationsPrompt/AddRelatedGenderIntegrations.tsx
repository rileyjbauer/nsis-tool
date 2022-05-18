import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import { getGenderIntegrationTitleFromId } from '../../Utils';
import './AddRelatedGenderIntegrations.css';

interface AddRelatedGenderIntegrationsPromptProps {
  relatedGenderIntegrationIds: number[];
  dismiss: () => void;
}

export function showAddRelatedGenderIntegrationsPrompt(relatedGenderIntegrationIds: number[], genderIntegrationsInCart: Map<number, string>): boolean {
  // When a nutrition intervention is added, show a prompt asking whether the user wants to add the related gender integrations, if they are not already in the cart
  let showPrompt = false;
  for (const id of relatedGenderIntegrationIds) {
    if (!genderIntegrationsInCart.has(id)) {
      showPrompt = true;
      break;
    }
  }
  return showPrompt;
}

export function AddRelatedGenderIntegrationsPrompt(props: AddRelatedGenderIntegrationsPromptProps): JSX.Element {
  return (
    <div className='add-to-cart-prompt-overlay'>
      <div className='add-to-cart-prompt'>
        <CartContext.Consumer>
          {(cartContext) => {
            return (
              <>
                <p className='no-top-margin'>
                  There are Gender Integrations related to this Nutrition Intervention that are not already in your cart:
                </p>
                <ul className='add-to-cart-prompt-ul'>
                  {props.relatedGenderIntegrationIds
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
                    props.relatedGenderIntegrationIds.forEach((id) => {
                      cartContext.addIntegration(
                        id,
                        getGenderIntegrationTitleFromId(id)
                      );
                    });
                    props.dismiss();
                  }}>
                    Yes
                  </button>
                  <button className='simple-button' onClick={() => props.dismiss()}>No</button>
                </span>
              </>);
          }}
        </CartContext.Consumer>
      </div>
    </div>
  );
}