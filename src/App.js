import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import ContextProvider from "./usecontext/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route
              path="/checkout"
              element={
                <>
                  <Checkout />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
