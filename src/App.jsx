import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import './App.css'

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Provider store={store}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
      </Provider>
    </>
  )
}

export default App
