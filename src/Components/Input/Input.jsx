
import "./Input.css"

// eslint-disable-next-line react/prop-types
const Input = ({ label, type, id, value, onChange }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
