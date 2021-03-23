import * as s from './App.styles'
import Main from "./main/main.component";
import Sidebar from "./sidebar/sidebar.component";
import { AiOutlinePieChart } from 'react-icons/ai';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { CgPerformance } from 'react-icons/cg';
import { AiOutlineMonitor } from 'react-icons/ai';



const App = () => {

  const backgrountImage = 'images/Beijing-DXC.jpg'
  const menuItems = [
      {name: 'Dashboard', to:'/', icon:<AiOutlinePieChart size={25}/>, submenuItems: []},
      {name: 'Patching', to:'/patching', icon:<MdSystemUpdateAlt size={25}/>, submenuItems: []},
      {name: 'Reports', to:'/reports', icon:<HiOutlineDocumentReport size={25}/>, 
        submenuItems: [
          {name: 'Patching', to:''},
          {name: 'Availability', to:''},
          {name: 'OS', to:''},
          {name: 'Syslog', to:''}
        ]},
      {name: 'Performance', to:'/performance', icon:<CgPerformance size={25}/>, submenuItems: []},
      {name: 'Monitoring', to:'/monitoring', icon:<AiOutlineMonitor size={25}/>, submenuItems: []},
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
