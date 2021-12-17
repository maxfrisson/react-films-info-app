import { Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage";
import { RandomFilmPage } from "./pages/RandomFilmPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={HomePage} exact />
        <Route path="/random" component={RandomFilmPage} exact />
      </div>
    </div>
  );
}

export default App;
