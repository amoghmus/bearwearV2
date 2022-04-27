import { useState } from "react";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [user, setUser] = useState({});
    
    let navigate = useNavigate();


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    const signIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
        } catch (error) {
            console.log(error.message);
        }
    }

    const logOut = async () => {
        await signOut(auth);
    }

    return (
        <div className="flex flex-col justify-center items-center mt-40"> 
            <div className="flex flex-col justify-center">
                <div className="text-green-400 text-2xl font-bold flex justify-center">Sign Up</div>
                <input className="border-1 mt-5" type="text" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)}/>
                <input className="border-1 mt-5" type="text" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)}/>
                <button className="pb-4 pt-5 text-green-300 font-bold flex justify-center" onClick={register}>Submit</button>
            </div>
        </div>
    )
}
export default SignUp