import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
  });


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    console.log(formData);
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
            name="city"
            id="city"
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

        <button
          type="submit"
          className="w-full cursor-pointer py-2.5 px-5 bg-blue-700 text-white font-medium rounded-lg text-sm hover:bg-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
