import "../styles/Personal.css";

export default function Personal() {
  return (
    <>
      {/* <h1>How&apos;s it going bros</h1> */}
      {/* <p>My name&apos;s pewdiepie!</p> */}
      <form className="form">
        <div className="nameAndAddress">
          <input id="name" placeholder="John Doe" />
          <input id="address" placeholder="Shell City, BB, OCA" />
        </div>
        <div className="emailNumberWebsite">
          <input id="email" placeholder="something@email.com" />
          <input id="number" placeholder="(515) 555-5555" />
          <input id="website" placeholder="yourwebsite.com/about" />
        </div>
      </form>
    </>
  );
}
