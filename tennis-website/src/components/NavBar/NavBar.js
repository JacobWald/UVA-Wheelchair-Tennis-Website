import "./NavBar.css";  

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function NavBar() {
    return (
        <div className='navbar'>
            <div className="navbar-content">
                <Link to="/">
                    <Button>
                        <HomeIcon sx={{ fontSize: '45px' }} />
                    </Button>
                </Link>
                <Link to="/about">
                    <Button>
                        About
                    </Button>
                </Link>
                <Link to="/meetTheTeam">
                    <Button>
                        Meet The Team
                    </Button>
                </Link>
                <Link to="/accomplishments">
                    <Button>
                        Accomplishments
                    </Button>
                </Link>
            </div>
        </div>
    );
}
