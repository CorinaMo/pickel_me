import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import cejas from '../images/buttons/eyebrows.jpg';
import ojos from '../images/buttons/eyes.jpg';
import pelo from '../images/buttons/hair.jpg';
import gafass from '../images/buttons/misc.jpg';
import pelillo from '../images/buttons/pelillos.jpg';
import boca from '../images/buttons/mouth.jpg';
import nariz from '../images/buttons/nose.jpg';
import fondo from '../images/buttons/walls.jpg';
import { eyes, eyebrows, noses, mouths } from '../assets/face.js';
import { gafas, pelillos, walls } from '../assets/miscandwalls';
import { hair } from '../assets/hair'
import Button from '@material-ui/core/Button';
import ReplyIcon from '@material-ui/icons/Reply';
import { lightGreen } from '@material-ui/core/colors';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import IconButton from '@material-ui/core/IconButton';

// Algunos estilos para Material UI
const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        maxWidth: '100%',
        flexWrap: 'wrap',
        overflowY: 'auto',
        height: '10em',
        overflowX: 'hidden',
        border: '2px dotted #9ccc65',
    },
    gridList2: {
        maxWidth: '100%',
        flexWrap: 'wrap',
        overflowY: 'auto',
        height: '10em',
        overflowX: 'hidden',
        border: '2px dotted #9ccc65',
        
    },
    tile: {
        border: '3px dotted #9ccc65',
        borderRadius: '20%'
    },
    back: {
        fontSize: '2em'
    },
    buttonback: {
        backgroundColor: lightGreen[600],
        color: 'white'
    },
    paper: {
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: '#339900 ' ,
        display: 'wrap',
        borderRadius: '30%'
    },

}));

// Objeto menú principal
const principal = [
    {
        img: cejas,
        title: 'Cejas',
    },
    {
        img: ojos,
        title: 'Ojos',
    },
    {
        img: pelo,
        title: 'Pelo',
    },
    {
        img: gafass,
        title: 'Gafas',
    },
    {
        img: pelillo,
        title: 'Pelillos',
    },
    {
        img: boca,
        title: 'Boca',
    },
    {
        img: nariz,
        title: 'Nariz',
    },
    {
        img: fondo,
        title: 'Fondo',
    },
];

// Componente Controles
export default function Controles() {
    const classes = useStyles();
    let [submenu, setSubmenu] = React.useState([]);
    let [counter, setCounter] = React.useState(0);
    const [showSub, setShowSub] = React.useState(false)
    let [styleButs, setStyleButs] = React.useState('0 0')
    let [styleButs2, setStyleButs2] = React.useState('')
    let [parte, setParte] = React.useState('')
    const [showColors, setShowColors] = React.useState(false)
    let [hairZero, setHairZero] = React.useState(0);
    let [cejasZero, setCejasZero] = React.useState(0);
    let [pelitos, setPelitos] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const id = open ? 'transitions-popper' : undefined;
    let [altoCelda, setAltoCelda] = React.useState(80)

    // Manejo del clic en los botones del menú principal
    function handleClick(e) {
        setShowSub(true)
        if (showColors === true) { setShowColors(false) }
        if (e.target.alt === 'Ojos') {
            setSubmenu(eyes)
            setStyleButs2('0.8')
            setStyleButs('49% 20%')
            setAltoCelda('115')
            setParte('Ojos')
            setCounter(counter + 1)
        }
        if (e.target.alt === 'Cejas') {
            setShowColors(true)
            let newArray = []
            eyebrows.forEach(h => {
                if (typeof h == 'string') {
                    newArray.push(h)
                } else {
                    newArray.push(h[0])
                }
            })
            setSubmenu(newArray)
            setStyleButs2('1')
            setStyleButs('49% 16%')
            setAltoCelda('115')
            setParte('Cejas')
            setCounter(counter + 1)
        }
        if (e.target.alt === 'Boca') {
            setSubmenu(mouths)
            setStyleButs2('0.75')
            setStyleButs('49% 30%')
            setAltoCelda('115')
            setParte('Boca')
            setCounter(counter + 1)
        }
        if (e.target.alt === 'Nariz') {
            setSubmenu(noses)
            setStyleButs2('1')
            setStyleButs('49% 28%')
            setAltoCelda('100')
            setParte('Nariz')
            setCounter(counter + 1)
        }
        if (e.target.alt === 'Gafas') {
            setSubmenu(gafas)
            setStyleButs2('0.6')
            setStyleButs('49% 20%')
            setAltoCelda('110')
            setParte('Gafas')
            setCounter(counter + 1)
        }
        if (e.target.alt === 'Pelillos') {
            setShowColors(true)
            let newArray = []
            pelillos.forEach(h => {
                if (typeof h == 'string') {
                    newArray.push(h)
                } else {
                    newArray.push(h[0])
                }
            })
            setSubmenu(newArray)
            setStyleButs2('0.7')
            setStyleButs('49% 30%')
            setAltoCelda('130')
            setParte('Pelillos')
            setCounter(counter + 1)
        }
        if (e.target.alt === 'Fondo') {
            setSubmenu(walls)
            setAltoCelda('140')
            setStyleButs('0 0')
            setStyleButs2('0.11')
            setParte('Fondo') 
            setCounter(counter + 1)                  
        }
        if (e.target.alt === 'Pelo') {
            setShowColors(true)
            let newArray = []
            hair.forEach(h => {
                newArray.push(h[0])

            })
            setSubmenu(newArray)
            setStyleButs2('0.3')
            setStyleButs('49% 1%')
            setAltoCelda('130')
            setParte('Pelo')
            setCounter(counter + 1)
        }
    }

    // Manejo del clic en los botones de los submenús
    function handleSubClick(e) {
        if (parte === 'Ojos') {
            let ojos = document.getElementById('eyes')
            ojos.src = e.target.src
        }
        if (parte === 'Cejas') {
            let cejas = document.getElementById('eyebrows')

            if (['1', '2', '0'].includes(e.target.name)) {
                setAnchorEl(e.currentTarget);
                setOpen(true)
                cejasZero = eyebrows[e.target.name]
                setCejasZero(cejasZero)
            } else {
                cejas.src = e.target.src
            }
        }
        if (parte === 'Boca') {
            let boca = document.getElementById('mouth')
            boca.src = e.target.src
        }
        if (parte === 'Nariz') {
            let nariz = document.getElementById('nose')
            nariz.src = e.target.src
        }
        if (parte === 'Gafas') {
            let gafas = document.getElementById('glasses')
            gafas.src = e.target.src
        }
        if (parte === 'Pelillos') {
            let pel = document.getElementById('pelillos')
            if (e.target.name !== '0') {
                setAnchorEl(e.currentTarget);
                setOpen(true)
                pelitos = pelillos[e.target.name]
                setPelitos(pelitos)
            } else {
                pel.src = e.target.src
            }
        }
        if (parte === 'Fondo') {
            let fondo = document.getElementById('wall')
            
            fondo.src = e.target.src
        }
        if (parte === 'Pelo') {
            setAnchorEl(e.currentTarget);
            setOpen(true)
            hairZero = hair[e.target.name]
            setHairZero(hairZero)
        }
    }

    // Función para el cambio de color del pelo, cejas y barba/ bigote
    function color(e) {
        if (parte === 'Pelo') {
            let pelo = document.getElementById('hair')
            pelo.src = hairZero[e.currentTarget.name]
        }
        if (parte === 'Cejas') {
            let cejas = document.getElementById('eyebrows')
            cejas.src = cejasZero[e.currentTarget.name]
        }
        if (parte === 'Pelillos') {
            let pel = document.getElementById('pelillos')
            pel.src = pelitos[e.currentTarget.name]
        }
        setOpen(false)
    }

    return (
        <div>
            {/* Iteración de las imágenes/ botones del menú principal */}
            <div style={{ display: showSub === false ? 'flex' : 'none' }}>
                <div className={classes.root}  >
                    <GridList className={classes.gridList} cols={4.5} cellHeight='5em'>
                        {principal.map((p) => (
                            <GridListTile key={p.img} className={classes.tile} >
                                <Button startIcon={<img className="botones" src={p.img} alt={p.title}
                                    style={{ width: '100%', height: '70%' }} />}
                                    onClick={handleClick} ></Button>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>

            <div style={{ display: showSub === true ? 'block' : 'none' }}>
                {/* Botón para volver al menú principal */}
                <div >
                    <Button variant="contained" className={classes.buttonback}
                        style={{ borderRadius: '25%', marginRight: '4em', height: '2.5em' }}
                        onClick={() => { setShowSub(false); setCounter(counter + 1) }}>
                        <ReplyIcon className={classes.back} />
                    </Button>

                    {/* Popper / menú de colores para pelo, cejas y barba/bigote */}
                    <div style={{ display: showColors === true ? 'block' : 'none' , marginTop: '0.4em', marginLeft: '1em' }}>
                        <Popper id={id} open={open} anchorEl={anchorEl} placement='top' style={{ zIndex: '14' }} transition>
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>

                                    <div className={classes.paper}>
                                        <ButtonGroup variant="outlined" style={{ border: 'none' }} >
                                            <IconButton name='0' onClick={color}
                                                style={{ color: 'black' }} >
                                                <FiberManualRecordIcon fontSize="large" /> </IconButton>
                                            <IconButton name='1' onClick={color}
                                                style={{ color: '#ffeb3b' }}
                                            > <FiberManualRecordIcon fontSize="large" /> </IconButton>
                                            <IconButton name='2' onClick={color}
                                                style={{ color: '#03a9f4' }}
                                            ><FiberManualRecordIcon fontSize="large" /> </IconButton>                                           
                                        </ButtonGroup><br/>

                                        <ButtonGroup variant="outlined" style={{ border: 'none' }} >
                                            <IconButton name='3' onClick={color}
                                                style={{ color: '#4d2600' }}
                                            ><FiberManualRecordIcon fontSize="large" /> </IconButton>
                                            <IconButton name='4' onClick={color}
                                                style={{ color: '#bdbdbd' }}
                                            > <FiberManualRecordIcon fontSize="large" /></IconButton>

                                            <IconButton name='5' onClick={color}
                                                style={{ color: '#e67300' }}
                                            ><FiberManualRecordIcon fontSize="large" /></IconButton>
                                            <IconButton name='6' onClick={color}
                                                style={{ color: '#ff9100' }}
                                            ><FiberManualRecordIcon fontSize="large" /></IconButton>
                                        </ButtonGroup><br/>

                                        <ButtonGroup variant="outlined" style={{ border: 'none' }} >
                                        <IconButton name='7' onClick={color}
                                                style={{ color: '#ff4081' }}
                                            ><FiberManualRecordIcon fontSize="large" /> </IconButton>
                                            <IconButton name='8' onClick={color}
                                                style={{ color: '#f44336' }}
                                            > <FiberManualRecordIcon fontSize="large" /></IconButton>
                                            <IconButton name='9' onClick={color}
                                                style={{ color: '#9c27b0' }}
                                            > <FiberManualRecordIcon fontSize="large" /></IconButton>
                                            <IconButton name='10' onClick={color}
                                                style={{ color: 'white' }}
                                            ><FiberManualRecordIcon fontSize="large" /> </IconButton>
                                        </ButtonGroup>
                                    </div>
                                </Fade>
                            )}
                        </Popper>

                    </div>
                </div><br />
                {/* Iteración del array submenú, que dependerá de la parte escogida del avatar 'pepinil' */}
                <div key={counter} className={classes.root} style={{ display: 'block' }}>

                    <GridList className={classes.gridList2} cols={3} cellHeight={altoCelda} >
                        {submenu.map((s, index) => (
                            <GridListTile className={classes.tile} key={s}>
                                <Button id={`but-${index}`} size='small' onClick={handleSubClick}
                                    startIcon={<img src={s} className="imgBut" alt="elemento submenú" name={`${index}`} 
                                                style={{ width: '100%',  objectFit:'none', objectPosition:styleButs, zoom: styleButs2 }} />} >
                                </Button>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </div>
    );
}