import {useState} from "react";
import firebase from 'firebase/app'
import 'firebase/auth'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async(event) => {
        event.preventDefault()
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log('login success')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="">email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
            <label htmlFor="">Password:</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};
export default LoginForm;