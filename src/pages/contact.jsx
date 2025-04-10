import React from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";
import styles from "./contact.module.css";
import { useState } from "react";

const ContactPage = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

  return (
    <Layout title="Contact" description="Contact form">
      <main className={styles.contactContainer}>
        <h1>
          <Translate id="contact.title">Contact Me</Translate>{" "}
        </h1>
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Your Name:{" "}
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Message:{" "}
              <textarea
                name="message"
                value={state.message}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </main>
    </Layout>
  );
};

export default ContactPage;
