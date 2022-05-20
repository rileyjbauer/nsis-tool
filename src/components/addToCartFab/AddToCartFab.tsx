import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { useState } from 'react';
import { CartContext } from '../../App';
import { GenderIntegration } from '../../pages/genderIntegrations/GenderIntegrationTemplate';
import { Intervention } from '../../pages/interventions/InterventionTemplate';
import { AddRelatedGenderIntegrationsPrompt, showAddRelatedGenderIntegrationsPrompt } from '../AddRelatedGenderIntegrationsPrompt/AddRelatedGenderIntegrations';
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
            <button className='floating-button'
              aria-label={`Add this ${props.nutritionIntervention ? 'nutrition intervention' : 'gender integration'} to cart`}
              onClick={() => {
                if (props.nutritionIntervention) {
                  cartContext.addIntervention(
                    props.nutritionIntervention.id,
                    props.nutritionIntervention.title
                  );

                  setShowPrompt(
                    showAddRelatedGenderIntegrationsPrompt(
                      props.nutritionIntervention.relatedGenderIntegrationIds,
                      cartContext.cart.genderIntegrations
                    )
                  );

                } else if (props.genderIntegration) {
                  cartContext.addIntegration(
                    props.genderIntegration.id,
                    props.genderIntegration.integration
                  );
                }
              }}>
              <AddShoppingCartRoundedIcon />
            </button>
            {
              showPrompt && (
                <AddRelatedGenderIntegrationsPrompt
                  relatedGenderIntegrationIds={props.nutritionIntervention?.relatedGenderIntegrationIds || []}
                  dismiss={() => setShowPrompt(false)}
                />
              )
            }
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}