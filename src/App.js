import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import wall1 from "./images/walls/wall1.jpg"
import pj from "./images/pickle.png"
import eyes0 from "./images/face/eyes0.png"
import mouth4 from "./images/face/mouth4.png"
import eyebrows4 from "./images/face/eyebrow4.png"
import nose0 from "./images/face/nose0.png"
import hair1grey from "./images/hair/hair1grey.png"
import empty from "./images/misc/empty.png"
import Controles from './components/Controles';
import { lightGreen } from '@material-ui/core/colors';
import avatarcircle from "./images/avatar-circle.JPG"
import html2canvas from 'html2canvas'
import CardMedia from '@material-ui/core/CardMedia';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Popper from '@material-ui/core/Popper';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

// Algunos estilos para Material UI
const useStyles = makeStyles((theme) => ({
  root: {
    textOverflow: "ellipsis",
    alignSelf: 'center',
    [theme.breakpoints.down(500)]: {
      width: "90%",
      marginLeft: '5%',
    },
    [theme.breakpoints.up(500)]: {
      width: "81%",
      marginLeft: '9.5%',
    },
    [theme.breakpoints.up(780)]: {
      width: "71%",
      marginLeft: "14.5%",
    },
    [theme.breakpoints.up(1000)]: {
      width: "36%",
      marginLeft: "30%",
    },
  },
  upmenu: {
    fontSize: '30px',
    color: lightGreen[800]
  },
  controls: {
    paddingTop: '100%'

  },
  popper: {
    zIndex: '20',
    backgroundColor: lightGreen[500],
    textAlign: 'center'
  },
  sharing: {
    color: 'white',
    fontSize: '25px'
  },
  media: {
    marginLeft: '0.1em',
    [theme.breakpoints.down(500)]: {
      width: "89%",
      marginLeft: '0.1em',
      height: 'auto',
    },
    [theme.breakpoints.up(500)]: {
      width: "80%",
      marginLeft: '0.1em',
      height: 'auto',
    },

    [theme.breakpoints.up(780)]: {
      width: "70%",
      marginLeft: "0.2em",
      height: 'auto',
    },

    [theme.breakpoints.up(1000)]: {
      width: "35%",
      marginLeft: "0.2em",
      height: 'auto',
    },

  },
  avatarcircle: {
    backgroundColor: lightGreen[600],
  },
}));

// Componente Principal
export default function App() {
  const classes = useStyles();

  // Guardar div del avatar como canvas
  function tocanvas(e) {
    let div = document.querySelector('#avatar')
    let fondo = document.querySelector('#wall')
    html2canvas(div, { width: fondo.width, height: fondo.height })
      .then(canvas => {
        let ctx = canvas.getContext('2d');
        ctx.imageSmoothingQuality = 'high'
        let enlace = document.createElement('a');
        enlace.download = "PickelMe.jpg";
        enlace.href = canvas.toDataURL("image/jpg", 1);
        enlace.click();
      });
  }
  function openimage() {
    let div = document.querySelector('#avatar')
    let fondo = document.querySelector('#wall')
    html2canvas(div, { width: fondo.width, height: fondo.height })
      .then(canvas => {
        let ctx = canvas.getContext('2d');
        ctx.imageSmoothingQuality = 'high'
        window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
      });
  }

  // Compartimos
  const text = encodeURIComponent("Sweet and hot... Pickle me!");
  const url = "https://CorinaMo.github.io/pickel_me";
  const params = "menubar=no,toolbar=no,status=no,width=600,height=600";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  // Compartir en Facebook
  function faceshare() {
    let shareface = `http://www.facebook.com/sharer/sharer.php?u=${url}`;
     window.open(shareface,"NewWindow" , params); 
     setOpen(false)
  }
  // Compartir en Twitter
  function twittershare(){
    let sharetweet = `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=corina_morera`
    window.open(sharetweet,"NewWindow" , params); 
     setOpen(false)
  }

  // Retorna Card con avatar al estilo 'Pickel Rick'
  return (
    <div className="pickelcard">
      <Card className={classes.root}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <CardHeader
            avatar={
              <Avatar src={avatarcircle} alt="avatar-circle" className={classes.avatarcircle}>
              </Avatar>
            }
            title="PICKEL ME!"

          />
          <ButtonGroup style={{ marginLeft: '20px'}}>
            <IconButton onClick={tocanvas} id='descarga' >
              <SaveAltIcon className={classes.upmenu} />
            </IconButton>
            <IconButton onClick={openimage} id='abre imagen' >
              <OpenInNewIcon className={classes.upmenu} />
            </IconButton>
            <IconButton >
              <ShareIcon className={classes.upmenu} onClick={(e => { setAnchorEl(e.target); setOpen(true) })} />
            </IconButton>
          </ButtonGroup>

          <Popper anchorEl={anchorEl} open={open} className={classes.popper} >
            <h4 style={{textAlign:'center', color:'white', marginRight:'20px', marginLeft:'20px'}} >Share the app</h4>
            <ButtonGroup>
              <IconButton>
                <FacebookIcon className={classes.sharing} onClick={faceshare} />
              </IconButton>
              <IconButton>
                <TwitterIcon className={classes.sharing} onClick={twittershare} />
              </IconButton>

            </ButtonGroup>
          </Popper>
        </div>

        {/* Avatar por defecto */}
        <CardMedia>
          <div id="avatar" className={classes.canva} >
            <img className={classes.media} src={wall1} id="wall" alt="wall" style={{ zIndex: '0', position: 'absolute', height: 'auto' }} />
            <img className={classes.media} src={pj} id="pj" alt="pj" style={{ zIndex: '1', position: 'absolute', height: 'auto' }} />
            <img className={classes.media} src={eyes0} id="eyes" alt="eyes" style={{ zIndex: '2', position: 'absolute', height: 'auto' }} />
            <img className={classes.media} src={mouth4} id="mouth" alt="mouth" style={{ zIndex: '3', position: 'absolute', height: 'auto' }} />
            <img className={classes.media} src={nose0} id="nose" alt="nose" style={{ zIndex: '4', position: 'absolute', height: 'auto' }} />
            <img className={classes.media} src={eyebrows4} id="eyebrows" alt="eyebrows" style={{ zIndex: '5', position: 'absolute', height: 'auto' }} />
            <img className={classes.media} src={hair1grey} id="hair" alt="hair" style={{ zIndex: '6', position: 'absolute', height: 'auto' }} />
            <img className={classes.media} src={empty} id="glasses" alt="gafas" style={{ zIndex: '7', position: 'absolute', height: 'auto' }} />
            <img className={classes.media} src={empty} id="pelillos" alt="pelillos" style={{ zIndex: '7', position: 'absolute', height: 'auto' }} />

          </div></CardMedia>
        {/* Llamada al componente Controles para modificar el avatar */}
        <CardActions className={classes.controls} disableSpacing>
          <Controles />
        </CardActions>

      </Card>
    </div>
  );
}
