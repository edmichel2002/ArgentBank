//import ReactDOM from "react-dom";
import "./Account.css"

// eslint-disable-next-line react/prop-types
function AccountSection ({ title, accountNumber, amount, amountDescription }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title} ({accountNumber})</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
    </section>
  )
}

export default AccountSection;