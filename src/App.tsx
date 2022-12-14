import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/HomePage";

import ConstInfo from "./components/pages/ConstInfo";

import RemoteCheckInsert from "./components/pages/RemoteCheckInsert";
import RemoteCheckStart from "./components/pages/RemoteCheckStart";
import RemoteCheckVideo from "./components/pages/RemoteCheckVideo";

import CheckReport from "./components/pages/CheckReport";
import CheckReportList from "./components/pages/CheckReportList";

import EndReport from "./components/pages/EndReport";
import StartReport from "./components/pages/StartReport";
import InfoDeliver from "./components/pages/InfoDeliver";

import EntStaff from "./components/pages/EntStaff";
import ExitStaff from "./components/pages/ExitStaff";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/test1" component={HomePage} exact />

        <Route path="/constInfo" component={ConstInfo} exact />

        <Route path="/remoteCheckInsert" component={RemoteCheckInsert} exact />
        <Route path="/remoteCheckStart" component={RemoteCheckStart} exact />
        <Route path="/remoteCheckVideo" component={RemoteCheckVideo} exact />

        <Route path="/checkReport" component={CheckReport} exact />
        <Route path="/checkReportList" component={CheckReportList} exact />

        <Route path="/endReport" component={EndReport} exact />
        <Route path="/startReport" component={StartReport} exact />
        <Route path="/infoDeliver" component={InfoDeliver} exact />

        <Route path="/entStaff" component={EntStaff} exact />
        <Route path="/exitStaff" component={ExitStaff} exact />
      </Switch>
    </Router>
  );
};

export default App;