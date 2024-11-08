import "../styles/Personal.css";
import React from "react";
import { useState } from "react";

export default function Personal() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <>
      <form className="form">
        <div className="nameAndAddress">
          <input
            id="name"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="address"
            placeholder="Shell City, BB, OCA"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="emailNumberWebsite">
          <input
            id="email"
            placeholder="something@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="number"
            placeholder="(515) 555-5555"
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            id="website"
            placeholder="yourwebsite.com/about"
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </form>

      <div className="preview">
        <h2>{name}</h2>
        <p>{address}</p>
        <p>{email}</p>
        <p>{number}</p>
        <p>{website}</p>
      </div>
    </>
  );
}
