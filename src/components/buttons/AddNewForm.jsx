import "../../styles/buttons/AddNewForm.css";

export default function AddNewForm({
  title,
  onClick,
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
            onClick(title, form);
          }}
        >
          {label}
        </button>
      </div>
    </>
  );
}
