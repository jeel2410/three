import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DASHBOARD from "./DASHBOARD";

import "./DASHBOARD.css";

function App() {
    return (
	<Router>
            <div className="content-container">
                <Switch>
                    <Route exact path="/" component={DASHBOARD} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
