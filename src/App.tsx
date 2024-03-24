import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Feed/Feed";
import Layout from "./pages/Layout";
import { MainContext } from "./context";

const App: React.FC = () => {
  return (
    <MainContext.Provider value={{}}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </MainContext.Provider>
  );
};

export default App;
