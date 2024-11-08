import "../styles/Resume.css";

export default function Education({ name, address, email, number, website }) {
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
    </>
  );
}
