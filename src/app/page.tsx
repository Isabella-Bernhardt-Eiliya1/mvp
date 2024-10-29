"use client"; // Add this line at the very top

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // Your component logic
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Join the Waitlist</h1>
        <p className={styles.description}>
          Sign up to be notified when we launch!
        </p>

        <form className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className={styles.submitButton}>
            Join Waitlist
          </button>
        </form>
      </main>
    </div>
  );
}