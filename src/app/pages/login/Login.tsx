import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"

export const Login = ()=> {

    const navigate = useNavigate();

    const handleClick = ()=> {
        navigate('/dashboard')
    }

    return (
        <div>
            <p>Login</p>
            <Button onClick={handleClick} variant="contained" color="primary">Oi</Button>
        </div>
    )
}