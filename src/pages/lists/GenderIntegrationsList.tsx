import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import { BasicPage } from '../../components/basicPage/BasicPage';
import GenderIntegrations from '../../data/gender-integrations.json';
import './List.css';

export function GenderIntegrationsList() {
  const [searchTerm, setSearchTerm] = useState('');

  function reset(): void {
    setSearchTerm('');
  }

  const filteredIntegrations = GenderIntegrations.genderIntegrations.filter(
    (integration) => integration.integration.includes(searchTerm));

  const content = (
    <div className='list-container'>
      <div className='list-searchbar'>
        <label className='list-searchbar-label'>
          <span className='list-searchbar-span'>Search:</span>
          <input name='searchField' className='list-searchbar-text-field' type='text' autoComplete='off' onChange={(event) => setSearchTerm(event.currentTarget.value)} value={searchTerm} />
        </label>

        <button className='simple-button' onClick={reset}>
          Reset
        </button>
      </div>

      {filteredIntegrations.map((genderIntegration, i) => {
        if (genderIntegration.integration) {
          return (
            <div key={i}>
              <span className='list-row'>
                <Link to={`/genderIntegrations/${genderIntegration.id}`}>
                  {`#${genderIntegration.id}`}
                </Link>
                <div className='list-item-title'>
                  {genderIntegration.integration}
                </div>
                <CartContext.Consumer>
                  {(cartContext) => {
                    return (
                      <button className='simple-button' onClick={() => cartContext.addIntegration(genderIntegration.id, genderIntegration.integration)}>
                        Add
                      </button>
                    );
                  }}
                </CartContext.Consumer>
              </span>
              <hr />
            </div>
          );
        }
        return <div key={i} />;
      })}
    </div>
  );
  return (
    <BasicPage
      title="All Gender Integrations"
      content={content}
    />
  );
}
