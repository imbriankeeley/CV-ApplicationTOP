import "../../styles/buttons/AddNewForm.css";

export default function AddNewForm({ form, label = "Add Form" }) {
  label = "Add " + form;
  if (form === "Experience") {
    return (
      <>
        <div className="addNewFormContainer">
          <button>{label}</button>
        </div>
      </>
    );
  }
}
