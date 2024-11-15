import "../../../styles/views/ExperienceView.css";

export default function CertificationsViewForm({ certification }) {
  const { cert, institute, date } = certification;

  return (
    <>
      <div className="titleAndDate">
        <div className="titleAndLink">
          <p className="cert">
            <b>{cert} </b> <p>{institute}</p>
          </p>
        </div>
        <div className="dateAndLocation">
          <h2 className="title">{date}</h2>
        </div>
      </div>
    </>
  );
}
