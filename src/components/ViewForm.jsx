import "../styles/View.css";

export default function ViewForm({ section, view }) {
  const {
    title,
    company,
    date,
    location,
    accomplishment1,
    accomplishment2,
    accomplishment3,
  } = view;

  if (section === "Experience") {
    return (
      <>
        <div className="titleAndDate">
          <div className="titleAndCompany">
            <h2 className="title">{title}</h2>
            <p className="company">{company}</p>
          </div>
          <div className="dateAndLocation">
            <h2 className="title">{date}</h2>
            <p className="company">{location}</p>
          </div>
        </div>
        <div className="accomplishments">
          {accomplishment1.length > 0 && (
            <p className="accomplishment">• {accomplishment1}</p>
          )}{" "}
          {accomplishment2.length > 0 && (
            <p className="accomplishment">• {accomplishment2}</p>
          )}{" "}
          {accomplishment3.length > 0 && (
            <p className="accomplishment">• {accomplishment3}</p>
          )}{" "}
        </div>
      </>
    );
  }
}
