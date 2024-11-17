export default function Delete({ id, section, onClick }) {
  return (
    <button
      className="deleteExperienceBtn"
      onClick={() => onClick(id, section)}
    >
      Delete
    </button>
  );
}
