import { useNavigate } from "react-router-dom"

export const Login = ()=> {

    const navigate = useNavigate();

    const handleClick = ()=> {
        navigate('/dashboard')
    }

    return (
        <div>
            <p>Login</p>
            <button type="button" onClick={handleClick}>Oi</button>
        </div>
    )
}