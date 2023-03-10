import CoinTracker from "./components/CoinTracker";
import MovieApp from "./components/MovieApp";
import SimpleWordcloud from "./components/wordCloud";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/movie">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
