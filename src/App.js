import { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useTokenAuth from "./hooks/useTokenAuth";

// Pages
import Board from "./pages/Board";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const TokenContext = createContext();

const App = () => {
  const [token, setToken] = useState();

  useTokenAuth(setToken);

  return (
    <TokenContext.Provider value={token}>
      <Router>
        <Routes>
          <Route path="/v1" element={<Board />} />
          <Route path="/v1/login" element={<Login setToken={setToken} />} />
          <Route
            path="/v1/register"
            element={<Register setToken={setToken} />}
          />
          <Route path="*" element={<Navigate to="/v1" replace />} />
        </Routes>
      </Router>
    </TokenContext.Provider>
  );
};

export default App;
