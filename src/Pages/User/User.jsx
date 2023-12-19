import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile } from "../../Redux/Reduce/authReducer";
import Button from "../../Components/Button/Button";
import EditButton from "../../Components/EditButton/EditButton";
import Account from "../../Components/Account/Account";

const API_URL = "http://localhost:3001/api/v1/user/profile";

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
  const userToken = useSelector((state) => state.auth.token);
  const userProfile = useSelector((state) => state.auth.userProfile);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur lors de la récupération du profil utilisateur : ${response.statusText}`);
        }

        const data = await response.json();
        dispatch(setUserProfile(data));
        setLoading(false); // Set loading to false after successful fetch
      } catch (error) {
        console.error('Erreur lors de la récupération du profil utilisateur :', error.message || 'Une erreur inconnue s\'est produite');
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchUserProfile();
  }, [dispatch, userToken]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userProfile?.username}!</h1>
          <EditButton />
        </div>
        <h2 className="sr-only">Comptes</h2>
        {datas.map((data, index) => (
          <Account
            key={index}
            title={data.title}
            accountNumber={data.accountNumber}
            amount={data.amount}
            amountDescription={data.amountDescription}
          />
        ))}
        <Button />
      </main>
    </>
  );
}

export default User;
