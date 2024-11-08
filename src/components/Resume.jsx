import "../styles/Resume.css";

export default function Resume({ name, address, email, number, website }) {
  return (
    <div className="resume">
      <div className="personal">
        <div className="nameAndAddressPreview">
          <h1>{name}</h1>
          <h2>{address}</h2>
        </div>
        <div className="emailNumberWebsitePreview">
          <p>{email}</p>
          <span>✥</span>
          <p>{number}</p>
          <span>✥</span>
          <p>{website}</p>
        </div>
      </div>
    </div>
  );
}
