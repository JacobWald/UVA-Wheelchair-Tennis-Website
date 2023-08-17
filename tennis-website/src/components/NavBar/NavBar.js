import "./NavBar.css";  

import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from "react";

export default function NavBar() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    return (
        <div className='navbar'>
            <div className="navbar-left">
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
                <Link to="/schedule">
                    <Button>
                        Schedule
                    </Button>
                </Link>
            </div>
            <div className="navbar-mobile">
                <div
                className="navbar-mobile-hamburgerWrapper"
                onClick={() => {
                    setMenuOpen(!isMenuOpen);
                }}
                style={isMenuOpen ? { transform: "rotate(90deg)" } : {}}
                >
                <div></div>
                <div></div>
                <div></div>
                </div>
                <Drawer anchor="left" open={isMenuOpen} onClose={handleMenuClose}>
                    <List>
                        <ListItem button>
                            <Link to="/" onClick={handleMenuClose}>
                                <ListItemText primary="Home" />
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link to="/about" onClick={handleMenuClose}>
                                <ListItemText primary="About" />
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link to="/meetTheTeam" onClick={handleMenuClose}>
                                <ListItemText primary="Meet The Team" />
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link to="/accomplishments" onClick={handleMenuClose}>
                                <ListItemText primary="Accomplishments" />
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link to="/schedule" onClick={handleMenuClose}>
                                <ListItemText primary="Schedule" />
                            </Link>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
            <div className="navbar-right">
                <img src="./images/sabers.svg" alt="UVA Sabers SVG" className="sabers-logo"/>
            </div>
        </div>
    );
}
