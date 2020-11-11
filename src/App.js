import ApplicationBar from "../src/components/App-Bar/App-Bar";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Login from "../src/components/login/login";
import Seat from "../src/components/Seat-Booking/Seat-Booking";
import Confirmation from "../src/components/Confirmation/Confirmation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ApplicationBar />
      <div className="margin-top">
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/seat" component={Seat} />
          <Route path="/confirmation" component={Confirmation} />
        </Router>
      </div>
    </div>
  );
}

export default App;
