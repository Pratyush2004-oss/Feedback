import { useEffect } from "react";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [appliedTheme, setappliedTheme] = useState(
    localStorage.getItem("Applied-theme")
      ? localStorage.getItem("Applied-theme")
      : "autumn"
  );

  const handleToggle = (e: any) => {
    if (e.target.checked) {
      setappliedTheme("forest");
    } else {
      setappliedTheme("corporate");
    }
  };

  useEffect(() => {
    appliedTheme && localStorage.setItem("Applied-theme", appliedTheme);
    const localTheme = localStorage.getItem("Applied-theme") || "corporate";
    const html = document.querySelector("html");
    if (html) {
      html.setAttribute("data-theme", localTheme);
    }
  }, [appliedTheme]);
  const navigate = useNavigate();
  return (
    <div className="p-4 h-[64px] border-b border-base-300 w-full">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="text-2xl font-bold font-mono">
          Feed<span className="text-primary ml-1">back</span>
        </Link>
        <div className="flex items-center gap-2">
          <label className="toggle text-base-content">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={appliedTheme === "forest"}
            />
            <X className="w-4 h-4" />
            <Check className="w-4 h-4" />
          </label>
          <button
            onClick={() => navigate("/feedback")}
            className="btn btn-sm rounded-lg btn-outline text-primary"
          >
            Admin Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
