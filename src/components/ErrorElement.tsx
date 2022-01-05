interface ErrorProps {
  message: string;
}

export function ErrorElement(props: ErrorProps) {
  return (<div>
    {props.message};
  </div>);
}