import ReactDOM from 'react-dom/client';
import './css/common.css'
import Hd from './Component/Hd';
import Banner from './Component/Banner';
import Statecom from './Component/State';
import banners from './data/Banner.json'
import SetTime from './Component/setTime';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Hd></Hd>

    <Banner datasrc={banners.mainbanner}></Banner>
    <Statecom></Statecom>
    <SetTime></SetTime>
  </>

);




