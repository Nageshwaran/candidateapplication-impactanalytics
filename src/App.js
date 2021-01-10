import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Candidate from "./Candidate";

import Shortlisted from "./Shortlisted";
import Rejected from "./Rejected";
import CandidateDetails from "./CandidateDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      userListfilter: [],
      shortList: [],
      rejected: []
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Candidate} />
            <Route exact path="/shortlisted" component={Shortlisted} />
            <Route exact path="/rejected" component={Rejected} />
            <Route path="/:id" component={CandidateDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
