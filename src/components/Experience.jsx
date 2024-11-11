import "../styles/components/Experience.css";
import { useState } from "react";

export default function Experience({
  title,
  setTitle,
  // title,
  // company,
  // date,
  // location,
  // accomplishment1,
  // accomplishment2,
  // setTitle,
  // setCompany,
  // setDate,
  // setLocation,
  // setAccomplishment1,
  // setAccomplishment2
}) {
  return (
    <>
      <form className="form">
        <input
          id="title"
          placeholder="Full Stack Software Engineer"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          id="company"
          placeholder="Sprig"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          id="date"
          placeholder="October 2024 - Present"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          id="location"
          placeholder="Remote"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          id="accomplishment1"
          placeholder="I made the whole backend :)"
          onChange={(e) => setAccomplishment1(e.target.value)}
        />
        <input
          id="accomplishment2"
          placeholder="I also made the whole frontend"
          onChange={(e) => setAccomplishment2(e.target.value)}
        />
      </form>
    </>
  );
}
