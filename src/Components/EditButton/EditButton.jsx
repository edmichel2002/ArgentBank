
import  { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setUserName } from '../../Redux/Reduce/profilReducer';
import "./EditButton.css";
import { apiCallWithAuth } from "../../Api/Apiservice";

function EditButton() {
    const dispatch = useDispatch();
    const profil = useSelector((state) => state.profil);
    const userName = profil.userName;
    const firstName = profil.firstName;
    const lastName = profil.lastName;
    const [toggle, setToggle] = useState(false);

    const setNewUsername = (e) => {
        e.preventDefault();
        const newUserName = e.target[0].value;

        // Mise à jour du store
        dispatch(setUserName(newUserName));

        // Mise à jour de l'API
        apiCallWithAuth("PUT", "user/profile", localStorage.getItem("token"), { userName: newUserName });

        // Fermer le formulaire après avoir sauvegardé
        setToggle(false);
    };

    const onCancel = () => {
        setToggle(false);
    };

    return (
        <div>
            <button className="edit-button" onClick={() => setToggle(!toggle)}>
                Edit Name
            </button>
            {toggle && (
                <form onSubmit={(e) => setNewUsername(e)}>
                    <div className='editProfil-main'>
                        <h1 className='editTitle'>Edit user info</h1>

                        <div className='editProfil-container'>
                            <label className="editProfillabel">UserName : </label>
                            <input
                                className="editinput"
                                type="text"
                                placeholder="User Name"
                                defaultValue={userName}
                            />
                        </div>

                        <div className='editProfil-container'>
                            <label className="editProfillabel">First Name: </label>
                            <input
                                className="editinput"
                                type="text"
                                placeholder="FirstName"
                                defaultValue={firstName}
                            />
                        </div>

                        <div className='editProfil-container'>
                            <label className="editProfillabel">Last Name: </label>
                            <input
                                className="editinput"
                                type="text"
                                placeholder="LastName"
                                defaultValue={lastName}
                            />
                        </div>
                        <div className="editProfilButtonContainer">
                            <button className="editProfilButton" type="submit">
                                Save
                            </button>
                            <button className="editProfilButton" onClick={onCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

export default EditButton;
