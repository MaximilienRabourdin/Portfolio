import React from 'react';
import MediaQuery from 'react-responsive';
import HeaderStyled from './HeaderStyled';


//Materia-UI
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';



export default function Header() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderStyled>
      <MediaQuery maxDeviceWidth={425}>
        <div className="header">
        <AppBar/>
        <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}>

        <MenuIcon fontSize="large"/>
      </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem 
            onClick={handleClose} 
            href="#compétences">Compétences</MenuItem>
            <MenuItem 
            onClick={handleClose}
            href="#portfolio"
            >Portfolio</MenuItem>
            <MenuItem onClick={handleClose}>Parcours</MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Menu>
        </div>
      </MediaQuery>




      <MediaQuery minDeviceWidth={426}>

        {/* For the Arrow'Footer  */}
        <a id="header"></a>


        <div className="menu">

        <Button className="button" id="accueil" href="/" >
            Accueil
</Button>

          <Button className="button" href="#compétences" >
            Compétences
</Button>

          <Button className="button" href="#portfolio">
            Portfolio
</Button>

          <Button className="button" href="#parcours" >
            Parcours
</Button>

          <Button className="button" href="#contact" >
            Contact
</Button>
        </div>

      </MediaQuery>

    </HeaderStyled>
  );
}


