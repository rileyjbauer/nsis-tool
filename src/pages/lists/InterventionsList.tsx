import { useState } from 'react';
import { Link } from 'react-router-dom';
import Select, { OnChangeValue } from 'react-select';
import { CartContext } from '../../App';
import { AddRelatedGenderIntegrationsPrompt, showAddRelatedGenderIntegrationsPrompt } from '../../components/AddRelatedGenderIntegrationsPrompt/AddRelatedGenderIntegrations';
import { BasicPage } from '../../components/basicPage/BasicPage';
import Interventions from '../../data/interventions.json';
import './List.css';

type Option = {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'Availability', label: 'Availability' },
  { value: 'Accessibility', label: 'Accessibility' },
  { value: 'Affordability', label: 'Affordability' },
  { value: 'Convenience', label: 'Convenience' },
  { value: 'Desirability', label: 'Desirability' },
  { value: 'Price', label: 'Price' },
  { value: 'Women\'s empowerment', label: 'Women\'s Empowerment' }
];

type ShowPrompt = {
  show: boolean;
  relatedGenderIntegrationIds: number[];
}

export function InterventionsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerms, setFilterTerms] = useState([] as Option[]);
  const [showPrompt, setShowPrompt] = useState({
    show: false,
    relatedGenderIntegrationIds: [],
  } as ShowPrompt);

  function handleFilterChange(options: OnChangeValue<Option, true>): void {
    setFilterTerms(options as Option[]);
  }

  function reset(): void {
    setFilterTerms([]);
    setSearchTerm('');
  }

  let filteredInterventions = Interventions.interventions;
  if (filterTerms.length > 0) {
    filteredInterventions = Interventions.interventions.filter(
      (intervention) => {
        for (let i = 0; i < filterTerms.length; i++) {
          if (!intervention.foodEnvironmentDomainsAffected.includes(filterTerms[i].value)) {
            return false;
          }
        }
        return true;
      }
    );
  }
  filteredInterventions = filteredInterventions.filter(
    (intervention) => intervention.title.includes(searchTerm));

  const content = (
    <div className='list-container'>
      <div className='list-searchbar'>
        <label className='list-searchbar-label'>
          <span className='list-searchbar-span'>Filter by food domain:</span>
          <Select
            isMulti
            name='Food Domains'
            options={options}
            value={filterTerms}
            onChange={handleFilterChange}
          />
        </label>

        <label className='list-searchbar-label'>
          <span className='list-searchbar-span'>Search:</span>
          <input name='searchField' className='list-searchbar-text-field' type='text' autoComplete='off' onChange={(event) => setSearchTerm(event.currentTarget.value)} value={searchTerm} />
        </label>

        <button className='simple-button' onClick={reset}>
          Reset
        </button>
      </div>
      <CartContext.Consumer>
        {(cartContext) => {
          return (<>
            {filteredInterventions.map((intervention, i) => {
              if (intervention.title) {
                return (
                  <div key={i}>
                    <span className='list-row'>
                      <Link to={`/interventions/${intervention.id}`}>
                        {`#${intervention.id}`}
                      </Link>
                      <div className='list-item-title'>{intervention.title}</div>

                      <button className='simple-button margin-left-10' disabled={cartContext.cart.nutritionInterventions.has(intervention.id)} onClick={() => {
                        cartContext.addIntervention(intervention.id, intervention.title);
                        setShowPrompt({
                          show: showAddRelatedGenderIntegrationsPrompt(
                            intervention.relatedGenderIntegrationIds,
                            cartContext.cart.genderIntegrations
                          ),
                          relatedGenderIntegrationIds: intervention.relatedGenderIntegrationIds
                        });
                      }}>
                        {cartContext.cart.nutritionInterventions.has(intervention.id) ? 'Added' : 'Add'}
                      </button>
                    </span>
                    <hr />
                  </div>
                );
              }
              return <div key={i} />;
            })}
          </>);
        }}
      </CartContext.Consumer>
      {
        showPrompt.show && (
          <AddRelatedGenderIntegrationsPrompt
            relatedGenderIntegrationIds={showPrompt.relatedGenderIntegrationIds}
            dismiss={() => setShowPrompt({ show: false, relatedGenderIntegrationIds: [] })}
          />
        )
      }
    </div>
  );

  return (
    <BasicPage
      title="All Nutrition Interventions"
      content={content}
    />
  );
}
