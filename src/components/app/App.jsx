import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../login/login";
import ProtectedRoute from "../../routes/protectedRoutes";

import "./app.scss";

export default function App() {
  const auth = useSelector((state) => state.isAuthenticated);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute auth={auth} />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<p>This page's not found 404!</p>} />
        </Routes>
      </Router>
    </div>
  );
}
