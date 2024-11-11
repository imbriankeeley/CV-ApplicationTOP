import "../styles/components/Resume.css";

export default function Resume({
  name,
  address,
  email,
  number,
  website,
  views,
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
      {/* {experiences.map((experience) => ( */}
      {/*   <ExperienceView */}
      {/*     key={experience.id} */}
      {/*     title={experience.title} */}
      {/*     company={experience.company} */}
      {/*     date={experience.date} */}
      {/*     location={experience.location} */}
      {/*     accomplishment1={experience.accomplishment1} */}
      {/*     accomplishment2={experience.accomplishment2} */}
      {/*     accomplishment3={experience.accomplishment3} */}
      {/*   /> */}
      {/* ))} */}
      {views.map((view) => {
        const ViewComponent = view.type;
        return <ViewComponent key={view.key} {...view.props} />;
      })}
    </div>
  );
}
