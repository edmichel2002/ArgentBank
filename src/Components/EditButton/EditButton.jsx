//import React from "react";
import { useState } from "react";
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
    const [toogle, setToogle] = useState(false);
    return (
        <div>
            <button className="edit-button" onClick={
                () => {
                    console.log(userName);
                    console.log("Edit button clicked!");
                    setToogle(!toogle);
                }
            }>Edit Name</button>
            {toogle && <div>
                <form onSubmit={(e) => {setNewUsername(e, dispatch)}}>
                    <div className='editProfil-main'>
                    <h1 className='editTitle'>Edit user infos</h1>
                    <div className='editProfil-container'>
                    <label className="">User Name : </label>
                    <input type="text" placeholder="User Name" defaultValue={userName} />
                    
                    <label>First Name : </label>
                    <input type="text" disabled placeholder="First Name" defaultValue={firstName} />
                    <label>Last Name : </label>
                    <input type="text" disabled placeholder="Last Name" defaultValue={lastName} />
                    <button type="submit">Save</button>
                    <button>Cancel</button>
                    
                </form>
            </div>}
        </div>
    );
}

export default EditButton;