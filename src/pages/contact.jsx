import React, { useState } from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";
import styles from "./contact.module.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, message: "" });

  const apiUrl = "https://nickmiyasato-backend.onrender.com/api/send-message";

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });
    const form = e.target.elements;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    fetch(`${apiUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout title="Contact" description="Contact form">
      <main className={styles.contactContainer}>
        <h1>
          <Translate id="contact.title">Contact Me</Translate>{" "}
        </h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className={styles.contactForm}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className={styles.hidden}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              <Translate id="contact.name.label">Name</Translate>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">
              <Translate id="contact.email.label">Email</Translate>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">
              <Translate id="contact.message.label">Message</Translate>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={status.type === "loading"}
          >
            <Translate id="contact.submit">Send Message</Translate>
          </button>
        </form>
        {status.type && (
          <div className={`${styles.status} ${styles[status.type]}`}>
            {status.message}
          </div>
        )}
      </main>
    </Layout>
  );
};

export default ContactPage;
