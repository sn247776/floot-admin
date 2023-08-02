import React, { useEffect } from "react";
import "./styles/main.scss";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/action/user";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "protected-route-react";
import Login from "./pages/auth/login";
import SignUP from "./pages/auth/signup";
import Home from "./pages/Home";
import { Toaster, toast } from "react-hot-toast";
import Games from "./pages/Games";
import Request from "./pages/Request";

function App() {
  const [theme, colorMode] = useMode();
  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  console.log(isAuthenticated);

  console.log(user);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster position="bottom-left" reverseOrder={false} />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirect="/login"
                >
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/games"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirect="/login"
                >
                  <Games />
                </ProtectedRoute>
              }
            />
            <Route
              path="/request"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirect="/login"
                >
                  <Request />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
                  <SignUP />
                </ProtectedRoute>
              }
            />
          </Routes>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
