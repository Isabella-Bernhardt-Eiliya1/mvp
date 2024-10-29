"use client"; // Add this line at the very top

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

const scriptURL = 'https://script.google.com/macros/s/AKfycbxabQz3kc1YOftVXJeM-4O3yxVxRSPtn_b_bImU0Tqsrq3V47gVr2iI4YK7FKV3ZghE/exec';

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitDisabled(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        alert("You are on our waitlist!");
        setSubmitDisabled(false);
        setName("");
        setEmail("");
      })
      .catch((error) => {
        alert("Error: " + error.message);
        setSubmitDisabled(false);
      });
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Join the Nomad Waitlist</h1>
        <p className={styles.description}>
          Sign up to be notified when we launch!
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="Name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Your name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="Email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Your email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className={styles.submitButton}
            disabled={submitDisabled}
          >
            Join Waitlist
          </button>
        </form>
      </main>
    </div>
  );
}
