import { useState } from 'react';
import { Link } from "react-router-dom";
import { useLogin } from '../hooks/useLogin';
import { FaImage, FaPencilAlt, FaPaintBrush } from 'react-icons/fa';
import { GoPaintcan } from 'react-icons/go';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isShown, setIsShown] = useState(false);
    const { login, isLoading, error } = useLogin();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsShown(true);
        await login(username, password);
        setIsShown(false);
    }

    return (
        <div className="logsignContainer">
            <div className='logsignForm'>
                <form onSubmit={handleLogin}>
                    <h2>LOGIN</h2>
                    <hr/>
                    <div className="userForm">
                        <label>Username: </label>
                        <input type="text" className="userInput" onChange={(e) => setUsername(e.target.value)} value={username}></input>
                        <label>Password: </label>
                        <input type="password" className="userInput" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                        <button className='logsignButton' disabled={isLoading}>Log in!</button>
                    </div>
                    <hr/>
                </form>
                <div>Don't have an acccount?</div>
                <Link to='/signup'>
                    <button className='logsignButton'>Sign Up!</button>
                </Link>
                {error && <p>{error}</p>}
                {isShown && <p className="status">Logging in...</p>}
            </div>
            <div className="icons">
                <div><FaImage size={60}/></div>
                <div><FaPencilAlt size={60}/></div>
                <div><GoPaintcan size={60}/></div>
                <div><FaPaintBrush size={60}/></div>
                <div><FaPencilAlt size={60}/></div>
                <div><FaImage size={60}/></div>
                <div><FaPaintBrush size={60}/></div>
                <div><FaPencilAlt size={60}/></div>
                <div><FaImage size={60}/></div>
                <div><GoPaintcan size={60}/></div>
            </div>
        </div>
    )
}