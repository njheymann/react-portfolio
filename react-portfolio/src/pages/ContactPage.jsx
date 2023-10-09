import { useState } from "react";

import { validateEmail } from "../utils/helpers";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email or username is invalid");

      return;
    }

    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="container text-center">
      <h2>Got any questions? Get in touch!</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          required
        />
        <br />

        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email adress"
          required
        />
        <br />

        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Message"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
