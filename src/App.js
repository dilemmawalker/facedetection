import Navigation from './Navigation'
import './App.css';
import 'tachyons';
import Logo from './Logo';
import Imagelinkform from './Imagelinkform';
import Face from './Facerecognition';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo/>
       <Imagelinkform/>
       {/* <Facerecognition/> */}
    </div>
  );
}

export default App;
