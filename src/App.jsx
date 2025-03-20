import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CircularProgress, Box } from "@mui/material";
import store from "./redux/store";

import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
const MyMatches = lazy(() => import("./pages/MyMatches"));
const Interests = lazy(() => import("./pages/Interests"));
const Account = lazy(() => import("./pages/Account"));
const Profile = lazy(() => import("./pages/Profile"));
import Protectedpass from "./components/ProtectedPass";

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
        <Suspense fallback={
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
              <CircularProgress />
            </Box>
          }>
            <Routes>
              <Route path="/signup" element={<Signup />} />
                <Route element={<Protectedpass />}>
                  <Route path="/" element={<Home />}>
                    <Route path="/" element={<Feed />} />
                    <Route path="/my-matches" element={<MyMatches />} />
                    <Route path="/interests" element={<Interests />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/account" element={<Account />} />
                  </Route>
                </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
