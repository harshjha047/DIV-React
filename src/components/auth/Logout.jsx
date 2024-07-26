// complete
import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";


function Logout() {
    const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include credentials (cookies)
      });
      const data = await response.json();
      console.log(data);

      if (response.ok && data.redirectTo) {
        navigate(data.redirectTo); // Redirect to the profile page
      } else {
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <button className="" type="submit" onClick={handleForm}>Logout</button>
        </form>
    </div>
  )
}

export default Logout