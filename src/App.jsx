import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CoinPage from "./pages/CoinPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/:coinId?" element={<CoinPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
