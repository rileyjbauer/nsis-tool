import './ErrorElement.css';

interface ErrorProps {
  message: string;
}

export function ErrorElement(props: ErrorProps): JSX.Element {
  return <div>
    <p>Error encountered:</p>
    <p className='error-message'>{props.message}</p>
  </div>;
}