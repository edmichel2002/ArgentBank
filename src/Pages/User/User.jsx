//import React from 'react';
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setUserProfile } from "../../Redux/Reduce/authReducer";
import Button from '../../Components/Button/Button';
import EditButton from '../../Components/EditButton';
import Account from '../../Components/Account/Account';


const datas = [{
    title: "Argent Bank Checking ",
    accountNumber: "(x8349)",
    amount: "$2,082.79",
    amountDescription: "Available Balance"
}, {
    title: "Argent Bank Savings ",
    accountNumber: "(x6712)",
    amount: "$10,928.42",
    amountDescription: "Available Balance"
}, {
    title: "Argent Bank Credit Card ",
    accountNumber: "(x8349)",
    amount: "$184.30",
    amountDescription: "Current Balance"
}]


function User (){
    const userToken = useSelector((state) => state.auth.token);
    const userProfile = useSelector((state) => state.auth.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserProfile = async () => {
          try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
              method: "GET",
              headers: {
                Authorization: `Bearer ${userToken}`,
                
              },
            });
    
            if (!response.ok) {
              // Gérer les erreurs ici si la réponse n'est pas OK
              throw new Error('Error fetching user profile');
            }
    
            const data = await response.json();
            // Dispatch une action pour mettre à jour le profil utilisateur dans le magasin Redux
            dispatch(setUserProfile(data));
          } catch (error) {
            console.error('Error fetching user profile:', error);
            // Gérer l'erreur ici,afficher un message à l'utilisateur
          }
        };
    
        // Appeler la fonction de récupération du profil utilisateur
        fetchUserProfile();
      }, [dispatch, userToken]);
    

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userProfile?.username}!</h1>
                <EditButton/>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {datas.map((data, index) => {
            return <Account key={index}  title={data.title} accountNumber={data.accountNumber} amount={data.amount} amountDescription={data.amountDescription} />
            })}
            <Button/>
        </main>
    );
}

export default User;