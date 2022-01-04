import { ArrowNavBar } from './ArrowNavBar';
import './BasicPage.css';

interface BasicPageProps {
  title?: string;
  content?: JSX.Element;
  navForward?: string;
  navBackward?: string;
}

export function BasicPage(props: BasicPageProps) {
  return (
    <div>
      <div className="header-bar" />
      <div className="content">
        {props.title && <h1>{props.title}</h1>}
        {props.content}
        <ArrowNavBar back={props.navBackward} forward={props.navForward} />
      </div>
    </div>
  );
}
