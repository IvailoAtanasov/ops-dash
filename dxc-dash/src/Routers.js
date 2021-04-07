import React from "react";
import { Switch, Route} from 'react-router-dom'


//dashboard patching reports performance monitoring
import Dashboard from "./pages/dashboard/dashboard.component";
import Patching from "./pages/patching/patching.component";
import Performance from "./pages/performance/performance.component";
import Monitoring from "./pages/monitoring/monitoring.component";
import Reports from "./pages/reports/reports.component";


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route  path='/patching' component={Patching}></Route>
            <Route  path='/monitoring' component={Monitoring}></Route>
            <Route  path='/performance' component={Performance}></Route>
            <Route  path='/reports' component={Reports}></Route>
        </Switch>
    )
}

export default Routes