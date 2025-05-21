export default function Alert({ type, text }) {
  return (
    <div className="container">
      <div className={`alert alert-${type || "danger"}`}>
        {text || "Si é verificato un errore"}
      </div>
    </div>
  );
}
