import "../styles/components/Resume.css";
import "../styles/views/ExperienceView.css";

export default function Resume({
  name,
  address,
  email,
  number,
  website,
  views,
}) {
  const handlePrint = () => {
    const originalContent = document.body.innerHTML;
    const resumeContent = document.querySelector(".resume");

    // Temporarily replace the entire body content with just the resume
    document.body.innerHTML = resumeContent.outerHTML;

    // Add print-specific styles
    const style = document.createElement("style");
    style.textContent = `
      @media print {
        body {
          margin: 0;
          padding: 0;
        }
        .resume {
          width: 210mm;
          min-height: 297mm;
          padding: 20mm;
          margin: 0;
          box-sizing: border-box;
        }
        @page {
          size: A4;
          margin: 0;
        }
      }
    `;
    document.head.appendChild(style);

    // Print
    window.print();

    // Restore the original content
    document.body.innerHTML = originalContent;
    document.head.removeChild(style);
  };
  return (
    <>
      <div className="resume">
        <div className="personal">
          <div className="nameAndAddressPreview">
            <h1>{name}</h1>
            <h2>{address}</h2>
          </div>
          <div className="emailNumberWebsitePreview">
            <p>{email}</p>
            {email.length > 0 && <span>✥</span>}
            <p>{number}</p>
            {number.length > 0 && <span>✥</span>}
            <p>{website}</p>
          </div>
        </div>
        {views.map((view) => {
          const ViewComponent = view.type;
          return <ViewComponent key={view.key} {...view.props} />;
        })}
      </div>
      <div className="print">
        <button className="printBtn" onClick={handlePrint}>
          Print Resume
        </button>
      </div>
    </>
  );
}
