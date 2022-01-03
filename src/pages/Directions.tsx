import { BasicPage } from "../components/BasicPage";

export function Directions() {
  const content = <div>
    <p>
      The Food Systems NSIS Design Tool is a self-guided, choose your own adventure tool. Throughout the tool, users are prompted to “select” the food systems components and sub-components they are working in and subsequently, the nutrition interventions that they want to learn more about. The PowerPoint will advance automatically when you select the clickable buttons. To start, put the presentation in presentation mode by clicking “slide show” view in your PowerPoint program.
    </p>
    <p>
      Throughout the NSIS Design Tool, users will see opportunities for gender considerations, for the sub-components of the food system. If users want to dive deeper into gender integration, considerations, and transformative gender approaches, users can select the clickable gender icons (shown below) throughout the NSIS Design Tool to be taken to more thorough explanations.
    </p>
  </div>;

  return (
    <BasicPage
      title="DIRECTIONS"
      content={content}
      navBackward="/preface"
      navForward="/mainNav"
    />
  );
}
