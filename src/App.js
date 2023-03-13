import CoinTracker from "./components/CoinTracker";
import MovieApp from "./components/MovieApp";
import SimpleWordcloud from "./components/wordCloud";
import TagCloud from "./components/TagCloud";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import ReactWordcloud from "react-wordcloud";
import MyComponent from "./components/Random";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/movie/:id">
    //       <Detail />
    //     </Route>
    //   </Switch>
    // </Router>
    // <SimpleWordcloud />
    // <TagCloud />
    // <SimpleWordcloud />
    <MyComponent />
  );
}

export default App;
