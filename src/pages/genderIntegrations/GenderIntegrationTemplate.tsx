import { BasicPage } from "../../components/basicPage/BasicPage";
import GenderIntegrations from '../../gender-integrations.json';
import './GenderIntegrationTemplate.css';
import { useParams } from "react-router-dom";
import { ErrorElement } from "../../components/ErrorElement";

type GenderIntegration = {
  id: number;
  integration: string;
  keyConsiderations: string[];
  transformative: string;
}

export function GenderIntegrationTemplate() {
  const params = useParams();
  const genderIntegrationId = Number(params.genderIntegrationId);

  // Find the specified integration in the data file
  const thisIntegration: GenderIntegration | undefined =
    GenderIntegrations.genderIntegrations.find(integration => integration.id === genderIntegrationId);

  if (!thisIntegration) {
    return (
      <ErrorElement message={`Error: Unable to find gender integration with ID: ${genderIntegrationId}`} />
    );
  }

  const content =
    <div>
      <h2>Suggested Gender Integration</h2>
      <h3 className='integration-heading'>
        {`#${thisIntegration.id}: ${thisIntegration.integration}`}
      </h3>
      {thisIntegration.keyConsiderations.length > 0 && (
        <div>
          <h4>Key Considerations</h4>
          <ol>
            {thisIntegration.keyConsiderations.map((consideration, i) => <li key={i}>{consideration}</li>)}
          </ol>
        </div>)}
      {thisIntegration.transformative && (
        <div>
          <h4>Transformative</h4>
          <p>{thisIntegration.transformative}</p>
        </div>)}
    </div>
  return (
    <BasicPage
      title=""
      content={content}
    />
  );
}