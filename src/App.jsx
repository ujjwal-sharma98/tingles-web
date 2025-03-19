import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import store from "./redux/store";

import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import MyMatches from "./pages/MyMatches";
import Interests from "./pages/Interests";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/protectedroute";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
            <Routes>
              <Route path="/signup" element={<Signup />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/dashboard" element={<Home />}>
                    <Route path="/dashboard" element={<Feed />} />
                    <Route path="/dashboard/my-matches" element={<MyMatches />} />
                    <Route path="/dashboard/interests" element={<Interests />} />
                    <Route path="/dashboard/profile" element={<Profile />} />
                    <Route path="/dashboard/account" element={<Account />} />
                  </Route>
                </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
