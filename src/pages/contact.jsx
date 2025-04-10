import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./contact.module.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isClient) {
    return null; // or a loading state
  }

  return (
    <Layout title="Contact" description="Contact form">
      <main className={styles.contactContainer}>
        <h1>
          <Translate id="contact.title">Contact Me</Translate>{" "}
        </h1>
        {status.type && (
          <div className={`${styles.status} ${styles[status.type]}`}>
            {status.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className={styles.contactForm} netlify>
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
            <label htmlFor="subject">
              <Translate id="contact.subject.label">Subject</Translate>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
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
      </main>
    </Layout>
  );
};

export default ContactPage;
