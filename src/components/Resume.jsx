import "../styles/components/Resume.css";

export default function Resume({
  name,
  address,
  email,
  number,
  website,
  views,
  experience,
}) {
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
      {views.map((ViewComponent, index) => (
        <ViewComponent key={index} />
      ))}
    </div>
  );
}
