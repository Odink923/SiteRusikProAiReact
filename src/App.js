
import './App.css';
import JournalComponent from './components/JournalComponent/JournalComponent';
import Footer from './components/Footer/Footer';
import LogoComponent from "./components/LogoComponent/LogoComponent"
import AdvertiseComponent from "./components/AdvertiseComponent/AdvertiseComponent"
import DirectionComponent from './components/DirectionComponent/DirectionComponent';

function App() {
  return (
    <div className="App">
      <LogoComponent></LogoComponent>
       <AdvertiseComponent></AdvertiseComponent> 
      <DirectionComponent></DirectionComponent>
 
       <JournalComponent></JournalComponent>
         <Footer></Footer> 
    </div>
  );
}

export default App;
