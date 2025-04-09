import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import { BASE_API_URL } from "../constant/api";
interface AdminState {
  admin: {
    email: string | null;
    password: string | null;
  } | null;
  login: (email: string, password: string) => Promise<boolean>;
  checkAdmin: () => void;
  logout: () => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  admin: null,

  login: async (email: string, password: string) => {
    try {
      if (!email || !password) {
        toast.error("All fields are required");
        return false;
      }
      const response = await axios.post(`${BASE_API_URL}/api/v1/admin`, {
        email,
        password,
      });
      if (response.status === 401) {
        toast.error("Unauthorized");
        return false;
      }
      localStorage.setItem("Admin", JSON.stringify({ email, password }));
      toast.success("Admin logged in successfully");
      set({ admin: { email, password } });
      return true;
    } catch (error: any) {
      toast.error(error.response.data.message);
      return false;
    }
  },

  checkAdmin: () => {
    const adminData = localStorage.getItem("Admin");
    if (adminData) {
      set({ admin: JSON.parse(adminData) });
    }
  },

  logout: () => {
    localStorage.removeItem("Admin");
    toast.success("Admin logged out successfully");
    set({ admin: null });
  },
}));
