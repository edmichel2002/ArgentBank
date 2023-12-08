
import Button from '../../Components/Button/Button';
import EditButton from '../../Components/Button/Button';
import Account from '../../Components/Account/Account';
function User (){
    return (
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <EditButton/>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account/>
                <Button/>
            </main>
      

            

    );
}

export default User;