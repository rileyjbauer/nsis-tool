import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { CartContext } from '../../App';
import { GenderIntegration } from '../../pages/genderIntegrations/GenderIntegrationTemplate';
import { Intervention } from '../../pages/interventions/InterventionTemplate';
import './AddToCartFab.css';

interface AddToCartFabProps {
  nutritionIntervention?: Intervention,
  genderIntegration?: GenderIntegration,
}

export function AddToCartFab(props: AddToCartFabProps): JSX.Element {
  return (
    <CartContext.Consumer>
      {(cartContext) => {
        return (
          <div className='add-to-cart-fab'>
            <button onClick={() => {
              if (props.nutritionIntervention) {
                cartContext.addIntervention(
                  props.nutritionIntervention.id,
                  props.nutritionIntervention.title
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
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}