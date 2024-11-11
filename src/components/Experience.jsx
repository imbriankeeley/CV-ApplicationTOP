import "../styles/components/Experience.css";
import ExperienceForm from "../components/forms/ExperienceForm.jsx";
import AddNewForm from "../components/buttons/AddNewForm";
import { useState } from "react";

export default function Experience({
  setTitle,
  setCompany,
  setDate,
  setLocation,
  setAccomplishment1,
  setAccomplishment2,
  setAccomplishment3,
}) {
  return (
    <>
      <ExperienceForm
        setTitle={setTitle}
        setCompany={setCompany}
        setDate={setDate}
        setLocation={setLocation}
        setAccomplishment1={setAccomplishment1}
        setAccomplishment2={setAccomplishment2}
        setAccomplishment3={setAccomplishment3}
      />
      <AddNewForm form="Experience" />
    </>
  );
}
