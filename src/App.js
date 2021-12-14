import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme); //Declaración de tema para hacer fontsize responsivo
 //

//Header es la clase donde estan las propiedades de el titulo JAVIER GONZÁLEZ... y el subtitulo ESTUDIANTE DE ...
class Header extends React.Component {
 render () {
   return <Box mr={2} pt={10} ml={3}>
     <div className="underL"><Typography variant="h2" className="white">{this.props.title}</Typography></div> 
     <Typography variant="h6" >{this.props.subtitle}</Typography>
   </Box>
 }      
}

class Datos extends React.Component {
  /*Values es un array de strings. Se utiliza el constructor para mapear el array, convertir cada valor en un elemento de la lista y almacenarlo en el state del constructor */
  constructor (props) {
    super(props);
     this.state = this.props.values.map(
      (values) => 
    <li>{values}</li>
    );
  }
render () {
  return <Box mr={2}>
          <div className="underL"><Typography variant="h4" className = "white">{this.props.title}</Typography></div>{/*La clase underL subraya con un color de texto predeterminado. Dentro del div se encuentra otro tag con la clase white que redefine el color del texto haciendo que el subrayado sea verde y el texto blanco*/}
          <Typography variant="subtitle2" align="right"><ul className="Data">{this.state}</ul></Typography> {/*La clase Data modifica el tipo de lista y dentro del tag ul se llama el state del constructor previamente definido */}
        </Box>
  
}
}

class Project extends React.Component {
  constructor (props) {
    super(props);
     this.state = this.props.achievements.map(
      (values) => 
    <li>{values}</li>
    );
  }
render () {
  return <Box>
          <Typography variant="h6">{this.props.title}</Typography>
          <Typography variant="subtitle2">{this.props.institution}</Typography> 
          <Typography variant="subtitle2">{this.props.period}</Typography>
          <div className="description">{this.props.description}</div> {/*description es una clase que da un font size de 10px */}
          <Typography variant="subtitle2"><ul>{this.state}</ul></Typography>
        </Box>
          }
}

class Skills extends React.Component {
  constructor (props) {
    super(props);
     this.state = this.props.values.map(
      (values) => 
    <li>{values}</li>
    );
  }
render () {
  return <Box ml={2} mr={2}> 
          <div className="underL"><Typography variant="h4" align="right" className = "white">{this.props.title}</Typography></div>
          <Typography variant="subtitle2" align="left"><ul>{this.state}</ul></Typography>
        </Box>
  
}
}
function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Container maxWidth="md">
        <Grid container spacing={6} className = "bg-container">
         <Grid xs={12} align="right">
           <Header title="JAVIER GONZÁLEZ GARDEA" subtitle="ESTUDIANTE DE MECATRÓNICA"/>
         </Grid>
         <Grid xs={12} sm={5} align="right">
               <Datos  title="DATOS PERSONALES" 
                  values={['614 104 40 68',' javieradrianglz@gmail.com']} 
                  />
                <Datos title="EDUCACIÓN" 
                  values={[
                    'Instituto Tecnológico de Estudios Superiores de Monterrey',
                    ' 6to semestre (2017-presente)',
                    ]} 
                  />
                  <Box mr={2}>
                  <div className="underL"> 
                  <Typography variant="h4" className = "white">ACTIVIDADES EXTRA</Typography>
                  </div>
                <ul className="Data" align="right">
                 <li>
                   <Typography variant="subtitle2">Robótica para todos (2018-presente)</Typography>
                 </li>
                 <li>
                   <div className="description">Proyecto social  dedicado a la enseñanza de robotica básica a niños de secundaria. </div>
                 </li>
                 <li>
                   <Typography variant="subtitle2">Centro Virtual de Aprendizaje (Nov 2019-Feb 2020)</Typography>
                 </li>
                 <li>
                    <div className="description">Cursos de informatica básica en linea a personas en diversos centros del CVA en el país.</div>
                </li>
               </ul>
               </Box>
               <Skills title="SOFTWARE E IDIOMAS" 
                  values={[
                    'Firebase (básico)',
                    'Arduino o C (intermedio)',
                    'C++ (intermedio)',
                    'Bootstrap',
                    'GitHub (básico)',
                    'Marvel App (intermedio) ',
                    'Inglés (TOEFL iBT 2017-2019, Diplomado de inglés de la facultad de filosofía y letras 2012-2014)',
                    'Alemán (básico)',
                    ]} 
                  />
                  <Skills title="INTERESES" 
                  values={[
                    'Programación',
                    'Electrónica',
                    'Nutrición',
                    ]} 
                  />
                  <Skills title="HABILIDADES" 
                  values={[
                    'Aprender rápido',
                    'Adaptable',
                    'Resolución de conflictos',
                    'Comunicación',
                    ]} 
                  />
         </Grid>
         <Grid xs={12} sm={7} align ="left">
           <Box ml={8} mr={2}>
             <div className="underL">
             <Typography variant="h4" className="white">
               PROYECTOS
            </Typography>
             </div>
            <Project title="LIDER DE DESARROLLO DEL PRODUCTO" 
                     institution="IDKFINANCES"
                     period ="MAR 2019 - DIC 2019"
                     achievements ={['Desarrollo de una aplicación para fondos de ahorro',
                                     'Fue parte de la incubadora del Parque Tecnológico Orión',
                                    ]}
              />
              <Project title="VERIFICACIÓN DE BASE DE DATOS" 
                     institution="ABISON BURKE"
                     period ="DICIEMBRE 2018"
                     achievements ={['Consistía en verificar la existencia de ciertos locales en google maps que estaban registrados en una base de datos ',
                                     'Se verificaron alrededor de 470 locales en base a imagenes, coordenadas, nombres y puntos de referencia',
                                    ]}
              />
              <Project title="BARQUITO ELÉCTRICO WIFI UTILIZANDO MYRIO" 
                     institution="ITESM"
                     period ="AGO 2017 - NOV 2017"
                     description = "EL BARCO TENÍA LA CAPACIDAD DE RECOLECTAR, DE FORMA AUTÓNOMA, PELOTAS Y ALMACENARLAS O DESECHARLAS DEPENDIENDO DE EL COLOR QUE TENÍAN."
                     achievements ={['Programación de bloques con Labview.',
                                     'Un control de XBOX operaba su movimiento',
                                     'Motores a pasos y piezas impresas en 3D recolectaban las pelotas.',
                                     'Sensores de colores permitían distinguir las pelotas, y los servos las manipulaban programado en Arduino.',
                                     'Un motor brushless, sus aspas, relays y servos impulsaban el barco.',
                                    ]}
              />
              <Project title="BARQUITO ELÉCTRICO BLUETOOTH UTILIZANDO ARDUINO" 
                     institution="ITESM"
                     period ="ENE 2018 - MAY 2018"
                     description = "EL BARCO TENÍA LA CAPACIDAD DE RECOLECTAR OBJETOS MEDIANTE UN BRAZO ARTICULADO, LANZAR PELOTAS DE PING PONG POR UN CAÑON Y TRASLADARSE UTILIZANDO RUEDAS DE PALETA. SE CONTROLÓ MEDIANTE UNA APLICACIÓN MÓVIL A TRAVES DE WIFI. "
                     achievements ={['Una app móvil operaba al barco.',
                                     'Un motor dc y una estructura cortada por laser en MDF disparaba pelotas de ping pong.',
                                     'Un brazo articulado por servos impreso en 3D levantaba objetos en el agua.',
                                     'Dos motores dc y ruedas de paleta impresas en 3D le daban movimiento al barco.',
                                     'Un módulo Wifi conectado al arduino enlazaba el barco con la app.',
                                    ]}
              />
           </Box>
         </Grid>
      </Grid>
    </Container>
    </MuiThemeProvider>
       
  );
}
export default App;



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/