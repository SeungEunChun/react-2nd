import ReactDOM from 'react-dom/client';
import './css/common.css'
import Hd from './Component/Hd';
import Banner from './Component/Banner';
import Statecom from './Component/State';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Hd></Hd>

    <Banner></Banner>
    <Statecom></Statecom>
  </>

);




