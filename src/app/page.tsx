"use client"; // Add this line at the very top

import Image from "next/image";
import nomadlogo from './images/nomadlogo.svg';
import { useState } from "react";
import styles from "./page.module.css";

const scriptURL = 'https://script.google.com/macros/s/AKfycbzq_jwaus2-KnMxrNFTRgdCjPyHdOlkBCYROY_JzdHVEsFKfNEQ7zgKrULYb2NTqLNz/exec';

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
      <div className={styles.logoContainer}>
      <div className={styles.logoWrapper}>
      <Image src={nomadlogo} alt="Nomad Logo" width={100} height={100} />
      </div>
      <h1>Nomad</h1>
      </div>
      <p> A platform to streamline the international relocation process, starting with VISA applications.</p>
      <div className={styles.videoContainer}>
          <video
            className={styles.video}
            controls
            width="800" 
            height="600" 
          >
            <source src="/NomadMVPDemo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
        
        <h3 className={styles.title}>Join the Nomad Waitlist</h3>
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
