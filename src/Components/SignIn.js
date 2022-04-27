import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPw, setRegisterPw] = useState("");
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPw, setSignInPw] = useState("");

    const [user, setUser] = useState({});
    let navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPw);
        } catch (error) {
            console.log(error.message);
        }
    }

    const signIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, signInEmail, signInPw);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    const logOut = async () => {
        await signOut(auth);
        navigate('/')
    }

    return (
        <div className="flex flex-col justify-center items-center mt-40"> 
            <div className="flex flex-col justify-center">
                <div className="text-green-700 text-2xl font-bold flex justify-center">Sign In</div>
                <input className="border-1 mt-5" type="text" placeholder="Email" onChange={(e) => setSignInEmail(e.target.value)}/>
                <input className="border-1 mt-5" type="text" placeholder="Password" onChange={(e) => setSignInPw(e.target.value)}/>
                <button className="pb-4 pt-5 text-green-500 font-bold flex justify-center" onClick={signIn}>Submit</button>
            </div>
        </div>
    )
}
export default SignIn