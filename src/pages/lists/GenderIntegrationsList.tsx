import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <label className='InputForm-label'>
          <span className='InputForm-span'>Search:</span>
          <input name='searchField' className='InputForm-text-field' type='text' autoComplete='off' onChange={(event) => setSearchTerm(event.currentTarget.value)} value={searchTerm} />
        </label>

        <button className='list-searchbar-reset-button' onClick={reset}>
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
                <div className='title'>{genderIntegration.integration}</div>
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
