import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackwardIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from 'react-router-dom';
import './ArrowNavBar.css';

interface ArrowNavBarProps {
  back?: string;
  forward?: string;
}

export function ArrowNavBar(props: ArrowNavBarProps) {
  const navigate = useNavigate();

  let backButton: JSX.Element;
  if (props.back) {
    backButton =
      (<Link to={props.back} className="arrow-button">
        <ArrowBackwardIcon sx={{ fontSize: 55 }} />
      </Link>);
  } else {
    // Just navigate backwards using default browers "Back" behavior
    backButton =
      (<div className='arrow-button' onClick={() => navigate(-1)}>
        <ArrowBackwardIcon sx={{ fontSize: 55 }} />
      </div>);
  }

  return (
    <div className="arrow-bar">
      {backButton}
      {props.forward &&
        (<Link to={props.forward} className="arrow-button">
          <ArrowForwardIcon sx={{ fontSize: 55 }} />
        </Link>)
      }
    </div>
  );
}