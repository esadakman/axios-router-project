import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NavBar from "../components/NavBar";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";
import { createTheme, ThemeProvider } from "@mui/material";
const AppRouter = () => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#eee",
      },
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          color: "white",
        },
      },
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/home" element={<PrivateRouter />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
