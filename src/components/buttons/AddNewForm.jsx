import "../../styles/buttons/AddNewForm.css";

export default function AddNewForm({ form, onClick, label = "Add Form" }) {
  label = "Add " + form;
  if (form === "Experience") {
    return (
      <>
        <div className="addNewFormContainer">
          <button type="button" onClick={onClick}>
            {label}
          </button>
        </div>
      </>
    );
  }
}
