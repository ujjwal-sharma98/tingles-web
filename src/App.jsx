import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import store from "./redux/store";
import './App.css'

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import MyMatches from "./pages/MyMatches";
import Interests from "./pages/Interests";
import Account from "./pages/Account";
import Profile from "./pages/Profile";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderRoutes = ["/signup"];

  return (
    <div>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      {children}
    </div>
  );
};

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/my-matches" element={<MyMatches />} />
              <Route path="/interests" element={<Interests />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account" element={<Account />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </Provider>
    </>
  )
}

export default App
