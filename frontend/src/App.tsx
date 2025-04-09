import { Navigate, Route, Routes } from "react-router-dom";
import InputForm from "../components/InputForm";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { useAdminStore } from "../store/aminStore";
import { useEffect } from "react";
import FeedbackPage from "../components/FeedbackPage";
const App = () => {
  const { checkAdmin, admin } = useAdminStore();

  useEffect(() => {
    checkAdmin();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<InputForm />} />
        <Route
          path="/feedback"
          element={admin ? <FeedbackPage /> : <Navigate to={"/adminLogin"} />}
        />
        <Route
          path="/adminLogin"
          element={admin ? <Navigate to={"/feedback"} /> : <LoginForm />}
        />
      </Routes>
    </>
  );
};

export default App;
