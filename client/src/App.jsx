import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
  });

  const [errors, setErrors] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function formSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/submitForm", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors); // Backend Errors
      } else {
        alert("✅ Form Submitted Successfull");
        setErrors([]);
      }
    } catch (error) {
      console.log("Fetching Data error", error);
    }
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gray-900">
      <form
        onSubmit={formSubmit}
        action="/submitForm"
        method="POST"
        className="bg-black shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Sign In
        </h2>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-100">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-700 border border-gray-300 text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter Your Name"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-700 border border-gray-300 text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="name@domain.com"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-100">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-700 border border-gray-300 text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-100">
            City
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="bg-gray-700 border border-gray-300 text-gray-100 text-sm rounded-lg block w-full p-2.5">
            <option value="">Select City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
            <option value="Chottogram">Chottogram</option>
          </select>
        </div>

        <div className="flex items-center justify-center w-full mb-5">
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer py-2.5 px-5 bg-blue-700 text-white font-medium rounded-lg text-sm hover:bg-blue-800">
          Submit
        </button>

        {/* Backend Errors */}
        {errors.length > 0 && (
          <ul className="text-red-400 text-sm mt-5">
            {errors.map((err, i) => (
              <li key={i}>{err.msg}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default App;
