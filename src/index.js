import ReactDOM from 'react-dom/client';
import './css/common.css'
import Hd from './Component/Hd';
import Banner from './Component/Banner';
import Statecom from './Component/State';
import Settime from './Component/settime';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Hd></Hd>

    <Banner></Banner>
    <Statecom></Statecom>
    <Settime />

  </>

);




