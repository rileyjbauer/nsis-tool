import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackwardIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import './ArrowNavBar.css';

interface ArrowNavBarProps {
  back?: string;
  forward?: string;
}

export function ArrowNavBar(props: ArrowNavBarProps) {
  return (
    <div className="arrow-bar">
      {props.back &&
        (<Link to={props.back} className="arrow-button">
          <ArrowBackwardIcon sx={{ fontSize: 55 }} />
        </Link>)
      }
      {props.forward &&
        (<Link to={props.forward} className="arrow-button">
          <ArrowForwardIcon sx={{ fontSize: 55 }} />
        </Link>)
      }
    </div>
  );
}