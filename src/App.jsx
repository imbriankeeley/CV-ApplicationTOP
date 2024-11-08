import "./App.css";
import { useState } from "react";
import Personal from "./components/Personal.jsx";
import Resume from "./components/Resume.jsx";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <>
      <Personal
        name={name}
        address={address}
        email={email}
        number={number}
        website={website}
        setName={setName}
        setAddress={setAddress}
        setEmail={setEmail}
        setNumber={setNumber}
        setWebsite={setWebsite}
      />
      <Resume
        name={name}
        address={address}
        email={email}
        number={number}
        website={website}
      />
    </>
  );
}
export default App;
