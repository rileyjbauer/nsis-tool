import { BasicPage } from '../../../components/BasicPage';

function tableContent(): JSX.Element {
  return (
    <div className='padding-10'>
      <h1 className='h1-smaller'>Value Chain Selection</h1>
      <table>
        <thead>
          <tr>
            <th>Potential Nutrition Intervention</th>
            <th>Food Environment Domains Affected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Promote the production of crops and livestock that will positively contribute to the availability of nutritious food at the household and/or market</td>
            <td>Availability, Accessibility, Affordability</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Gender Integration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Roles and responsibilities in crop production and livestock rearing tend to be assigned according to traditional gender roles. Recognizing the different roles men and women play, and their different levels of access to/control over resources, decision-making, and time burdens is important to consider in the selection of crop and livestock varieties.</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export function ValueChainSelection() {
  const content =
    <div style={{ display: 'flex' }}>
      <div>
        <p className='padding-10' >Select the activity you are undertaking:</p>
        <div className={'left-nav-button left-nav-button-selected'}>
          <p>Value Chain Selection</p>
        </div>
      </div>
      <div className='content-box'>
        {tableContent()}
      </div>
    </div >;

  return (
    <BasicPage
      title="Agro-Input Supply and Service Delivery"
      content={content}
      navBackward="/production"
    />
  );
}

