import { useState } from 'react';
import { Link } from 'react-router-dom';
import Select, { OnChangeValue } from 'react-select';
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
  { value: 'Women\'s Empowerment', label: 'Women\'s empowerment' }
]

export function InterventionsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerms, setFilterTerms] = useState([] as Option[]);

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
          console.log(filterTerms[i].value);
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
        <label className='InputForm-label'>
          <span className='InputForm-span'>Filter by food domain:</span>
          <Select
            isMulti
            name='Food Domains'
            options={options}
            value={filterTerms}
            onChange={handleFilterChange}
          />
        </label>

        <label className='InputForm-label'>
          <span className='InputForm-span'>Search:</span>
          <input name='searchField' className='InputForm-text-field' type='text' autoComplete='off' onChange={(event) => setSearchTerm(event.currentTarget.value)} value={searchTerm} />
        </label>

        <button className='list-searchbar-reset-button' onClick={reset}>
          Reset
        </button>
      </div>
      {filteredInterventions.map((intervention, i) => {
        if (intervention.title) {
          return (
            <div key={i}>
              <span className='list-row'>
                <Link to={`/interventions/${intervention.id}`}>
                  {`#${intervention.id}`}
                </Link>
                <div className='title'>{intervention.title}</div>
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
      title="All Nutrition Interventions"
      content={content}
    />
  );
}
