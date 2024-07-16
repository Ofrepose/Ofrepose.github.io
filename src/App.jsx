import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MarketingHome from "views/MarketingHome";

import ErrorBoundary from "contexts/ErrorHandling/ErrorHandler";

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<MarketingHome />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
