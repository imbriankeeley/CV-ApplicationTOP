import "../../styles/buttons/AddNewForm.css";

export default function AddNewForm({
  title,
  onClick,
  section,
  form,
  label = "Add Form",
}) {
  label = "Add " + title;
  return (
    <>
      <div className="addNewFormContainer">
        <button
          type="button"
          onClick={() => {
            onClick(section, form);
          }}
        >
          {label}
        </button>
      </div>
    </>
  );
}
