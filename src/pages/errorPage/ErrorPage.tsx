import { BasicPage } from '../../components/basicPage/BasicPage';
import { ErrorElement } from '../../components/errorElement/ErrorElement';

interface ErrorProps {
  message: string;
}

export function ErrorPage(props: ErrorProps) {
  return (
    <BasicPage
      title='An error occurred:'
      content={<ErrorElement message={props.message} />}
      navBackward='/mainNav'
    />
  );
}