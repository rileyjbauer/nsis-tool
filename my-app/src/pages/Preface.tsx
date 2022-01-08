import { BasicPage } from '../components/BasicPage';

export function Preface() {
  const content = <div>
    <p>
      The Food Systems NSIS Design Tool offers a non-exhaustive list of nutrition interventions that may be applicable to implementers working in agriculture, market systems, and/or food systems development. NSIS Design Tool users should work with their teams to determine which interventions are most relevant and how these interventions can be built into their work.
    </p>
    <p>
      IGNITE will continue to update the NSIS tool as needed, accounting for evolved thinking in the field and feedback from users.
    </p>
  </div>;

  return (
    <BasicPage
      title="PREFACE"
      content={content}
      navBackward="/welcome"
      navForward="/directions"
    />
  );
}
