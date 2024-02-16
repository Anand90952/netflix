import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import request from './request'

function App() {
 
  return (
    <div>
      <h1 style={{color:"red"}}>Netflix</h1>
     <Row title="NetflixOriginal" fetchurl={request.fetchNetflixOriginals}/>
      
    </div>
  );
}

export default App;
