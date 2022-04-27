import { Link } from 'react-router-dom'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 

function Navbar() {
    const [user, setUser] = useState(null);
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    let navigate = useNavigate();

    const logOut = async () => {
        await signOut(auth);
        navigate('/')
    }
    return (
        <div className='flex flex-row justify-end items-center'>
            <div className='pb-6 pt-6 justify-start mr-auto'>
                <Link className='text-5xl font-bold pl-5'to={"/"}>Bearwear</Link>
            </div>
            {user &&
                    <button className='ml-5 mr-5 text-base' onClick={ logOut }>Log Out</button>
            }
        </div>
    );
}
export default Navbar