import tailwindcss from "tailwindcss";
import { auth } from "../firebase-config";
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut} from "firebase/auth";
import { useState } from "react";
import { async } from "@firebase/util";

function Authentication() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [user, setUser] = useState({});

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
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

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })


    return (
        <div className="flex flex-col justify-center">  

            {user?.email}
        
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center">Sign Up</div>
                <input type="text" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)}/>
                <button onClick={register}>Submit</button>
            </div>
            

            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center">Sign In</div>
                <input type="text" placeholder="Email" onChange={(e) => setSignInEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setSignInPassword(e.target.value)}/>
                <button onClick={signIn}>Submit</button>
            </div>

            <button onClick={logOut}>Log Out</button>
        </div>
    )

}
export default Authentication