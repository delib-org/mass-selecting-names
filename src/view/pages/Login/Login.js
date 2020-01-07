import React from 'react';
import './Login.css';

function Login() {

    function tryLogin(e){
        e.preventDefault();
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;

        console.log(email, password )
        
        window.firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            console.error(error)
          });
    }
    return (
        <div className='login_wrapper'>
            <form onSubmit={(e)=>{tryLogin(e)}}>
                <input name='email' type='email' placeholder='דואר אלקטרוני'></input>
                <input name='password' type='password' placeholder='סיסמה'></input>
                <input className='buttons' type='submit' value='התחברות'></input>
            </form>
        </div>
    )
}

export default Login;