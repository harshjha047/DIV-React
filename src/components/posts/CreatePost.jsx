import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
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
      const response = await fetch("http://localhost:3000/post/create", {
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
        console.error("post failed:", data.error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div>
      <div className="h-[100vh] bg-[#111] flex justify-center items-center flex-col text-white">
        <h1 className="text-3xl">Create Post</h1>

        <form
          action=""
          method="post"
          onSubmit={handleSubmit}
          className="flex w-[25%] h-[70%] flex-col justify-center gap-3"
        >
          <label htmlFor="video">Uplode Video</label>
          <input
            onChange={handleForm}
            name="video"
            type="file"
            id="video"
            placeholder="Uplode Video"
            required
            className=" outline-none bg-[#111] border "
          />
          <label htmlFor="video">Uplode image</label>
          <input
            onChange={handleForm}
            name="thumbnail"
            type="file"
            id="image"
            required
            className=" outline-none bg-[#111] border "
          />
          <input
            onChange={handleForm}
            name="title"
            type="text"
            placeholder="Titel"
            required
            className=" outline-none p-2  bg-[#111] border "
          />
          <textarea
            onChange={handleForm}
            name="discription"
            placeholder="Description"
            rows="7"
            className="outline-none  resize-none  p-2 bg-[#111] border"
          ></textarea>
          <button
            type="submit"
            className="bg-[#111] border text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
