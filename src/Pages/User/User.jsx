// User.js
import { useSelector } from "react-redux";
import EditButton from "../../Components/EditButton/EditButton";
import Account from "../../Components/Account/Account";

const datas = [
  {
    title: "Argent Bank Checking ",
    accountNumber: "(x8349)",
    amount: "$2,082.79",
    amountDescription: "Available Balance",
  },
  {
    title: "Argent Bank Savings ",
    accountNumber: "(x6712)",
    amount: "$10,928.42",
    amountDescription: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card ",
    accountNumber: "(x8349)",
    amount: "$184.30",
    amountDescription: "Current Balance",
  },
];


function User() {
  const profil = useSelector((state) => state.profil);

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
            <>
              <h1>Welcome back<br />{profil?.userName} !</h1>
              <EditButton />
            </>
        </div>
        <h2 className="sr-only">Account</h2>
        {datas.map((data, index) => (
          <Account
            key={index}
            title={data.title}
            accountNumber={data.accountNumber}
            amount={data.amount}
            amountDescription={data.amountDescription}
          />
        ))}
      </main>
    </>
  );
}

export default User;