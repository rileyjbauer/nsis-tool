import { BasicPage } from '../components/basicPage/BasicPage';

export function Welcome() {
  const content = (
    <div>
      <h3>
        Welcome to the Food Systems Nutrition-Sensitive Intervention Selection (NSIS) Design Tool. This tool will walk through the process of identifying, designing, and implementing nutrition-sensitive interventions.
      </h3>
      <h2>PREFACE</h2>
      <p>
        The Food Systems NSIS Design Tool offers a non-exhaustive list of nutrition interventions that may be applicable to implementers working in agriculture, market systems, and/or food systems development. NSIS Design Tool users should work with their teams to determine which interventions are most relevant and how these interventions can be built into their work.
      </p>
      <p>
        IGNITE will continue to update the NSIS tool as needed, accounting for evolved thinking in the field and feedback from users.
      </p>
      <h2>DIRECTIONS</h2>
      <p>
        The Food Systems NSIS Design Tool is a self-guided, choose your own adventure tool. Throughout the tool, users are prompted to "select" the food systems components and sub-components they are working in and subsequently, the nutrition interventions that they want to learn more about. In this way, the tool will guide the user to the information most relevant to them.
      </p>
      <p>
        Throughout the NSIS Design Tool, users will see opportunities for gender considerations, for the sub-components of the food system. If users want to dive deeper into gender integration, considerations, and transformative gender approaches, users can click the suggestions be taken to more thorough explanations.
      </p>
    </div>
  );

  return (
    <BasicPage
      title="WELCOME"
      content={content}
      navBackward="/"
      navForward="/mainNav"
    />
  );
}