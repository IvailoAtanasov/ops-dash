import * as s from './App.styles'
import Main from "./pages/main/main.component";
import Sidebar from "./components/sidebar/sidebar.component";
import { AiOutlinePieChart } from 'react-icons/ai';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { CgPerformance } from 'react-icons/cg';
import { AiOutlineMonitor } from 'react-icons/ai';



const App = () => {

  const backgrountImage = 'images/Beijing-DXC.jpg'
  const menuItems = [
      {name: 'Dashboard', to:'/', icon:<AiOutlinePieChart size={25}/>},
      {name: 'Patching', to:'/patching', icon:<MdSystemUpdateAlt size={25}/>},
      {name: 'Reports', to:'/reports', icon:<HiOutlineDocumentReport size={25}/>},
      {name: 'Performance', to:'/performance', icon:<CgPerformance size={25}/>},
      {name: 'Monitoring', to:'/monitoring', icon:<AiOutlineMonitor size={25}/>},
    ]
  
  return (
    <s.App>
      <Sidebar 
        backgroundImage={backgrountImage}
        menuItems={menuItems}
      />
      <Main/>
    </s.App>
  );
}

export default App;
