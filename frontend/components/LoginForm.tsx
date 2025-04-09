import { KeyRound, Mail } from "lucide-react";
import { useState } from "react";
import { useAdminStore } from "../store/adminStore";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const { login } = useAdminStore();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await login(email, password);
    if (res) {
      setEmail("");
      setpassword("");
      navigate("/feedback");
    }
  };
  return (
    <div className="p-5 flex items-center justify-center h-[calc(100vh-117px)]">
      <div className="flex flex-col items-center justify-center gap-2 border rounded-lg shadow-md w-full max-w-[550px] p-5">
        <h1 className="text-xl font-bold">Login</h1>
        <div className="divider" />
        {/* User name */}
        <div className="w-full">
          <label className="ml-2">Email</label>
          <label className="input w-full mt-2">
            <Mail />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="grow w-full"
              placeholder="Email"
            />
          </label>
        </div>
        {/* Password */}
        <div className="w-full">
          <label className="ml-2">Password</label>
          <label className="input w-full mt-2">
            <KeyRound />
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="text"
              className="grow w-full"
              placeholder="Password"
            />
          </label>
        </div>
        <button onClick={handleLogin} className="btn btn-primary w-full mt-5">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
