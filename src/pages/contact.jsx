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
        <form
          data-netlify="true"
          name="pizzaOrder"
          method="post"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="pizzaOrder" />
          <label>
            What order did the pizza give to the pineapple?
            <input name="order" type="text" onChange={handleChange} />
          </label>
          <input type="submit" />
        </form>
      </main>
    </Layout>
  );
};

export default ContactPage;
