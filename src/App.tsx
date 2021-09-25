import { Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
import { Random } from "./pages/Random";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/random" component={Random} exact />
      </div>
    </div>
  );
}

export default App;
