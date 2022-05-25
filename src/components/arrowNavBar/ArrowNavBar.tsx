import ArrowBackwardIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import './ArrowNavBar.css';

interface ArrowNavBarProps {
  back?: string;
  forward?: string;
}

export function ArrowNavBar(props: ArrowNavBarProps) {
  const navigate = useNavigate();

  return (
    <div className='arrow-bar'>
      <div className='arrow-bar-content'>
        {/* If no 'Back' destination is specified, just navigate backwards using default browers 'Back' behavior */}
        <button className='arrow-button' onClick={() => props.back ? navigate(props.back) : navigate(-1)} aria-label='Go back'>
          <ArrowBackwardIcon sx={{ fontSize: 55 }} />
        </button>
      </div>
    </div>
  );
}