import { User, Mail } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_API_URL } from "../constant/api";
const InputForm = () => {
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [message, setmessage] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setloading(true);
      if (!name || !email || !message) {
        return toast.error("All fields are required");
      }
      if (!email.includes("@")) {
        return toast.error("Invalid email");
      }
      const response = await axios.post(`${BASE_API_URL}/api/v1/feedback/add`, {
        name,
        email,
        message,
      });
      if (response.status === 201) {
        toast.success("Feedback added successfully");
        setname("");
        setemail("");
        setmessage("");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error.response);
    } finally {
      setloading(false);
    }
  };
  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)] p-4">
      <div className="flex flex-col items-center justify-center border p-5 border-gray-300 rounded-xl shadow-md max-w-[500px] w-full">
        <h1 className="font-mono font-bold text-2xl">Submit your Feedback</h1>
        <div className="divider" />
        <div className="w-full mt-3">
          <label className="ml-2">Name</label>
          <label className="input w-full mt-2">
            <User />
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              className="grow w-full"
              placeholder="Enter your Name"
            />
          </label>
        </div>

        <div className="w-full mt-3">
          <label className="ml-2">Email</label>
          <label className="input w-full mt-2">
            <Mail />
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="Enter your email"
              className="grow w-full"
              placeholder="Enter your email"
            />
          </label>
        </div>
        <div className="w-full mt-3 ">
          <label className="ml-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            className="textarea w-full"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="w-full mt-3">
          <button
            className="btn w-full btn-primary"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
