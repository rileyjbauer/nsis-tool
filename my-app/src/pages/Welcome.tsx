import { BasicPage } from '../components/BasicPage';

export function Welcome() {
  const content = <h3>
    "Welcome to the Food Systems Nutrition-Sensitive Intervention Selection (NSIS) Design Tool. This tool will walk through the process of identifying, designing, and implementing nutrition-sensitive interventions."
  </h3>;

  return (
    <BasicPage
      title="WELCOME"
      content={content}
      navBackward="/"
      navForward="/preface"
    />
  );
}