// src/pages/ApplyClient.jsx

import { useState } from "react";
import "./ApplyClient.css";
import FormfacadeEmbed from "@formfacade/embed-react";

const ApplyClient = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    age: "",
    instagramId: "",
    phoneNumber: "",
    followers: "",
    goals: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "335a874f-6ea7-4806-b824-6d8095c62883");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="form-container">
      <h1>Apply as a Client</h1>
      <form onSubmit={onSubmit}>
        <div className="flex-container">
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age*</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Instagram ID*</label>
            <input
              type="text"
              name="instagramId"
              value={formData.instagramId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number*</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Number Of Followers*</label>
            <input
              type="number"
              name="followers"
              value={formData.followers}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group full-width">
            <label>What are your main goals for MNZ media*</label>
            <textarea
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
    // <div className="lol">
    //   <FormfacadeEmbed
    //     formFacadeURL="https://formfacade.com/include/108483069533092335476/form/1FAIpQLSemDH9hRJ_B0n2sMr0ysAAN3mEprSe9woi-xQHlKVcQbZdvTA/classic.js/?div=ff-compose"
    //     onSubmitForm={() => console.log("Form submitted")}
    //   />
    // </div>
  );
};

export default ApplyClient;
