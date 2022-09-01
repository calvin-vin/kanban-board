import { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import Board from "./pages/Board";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const TokenContext = createContext();

const App = () => {
  const [token, setToken] = useState();

  return (
    <TokenContext.Provider value={token}>
      <Router>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </TokenContext.Provider>
  );
};

export default App;
