import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { useAppThemeContext } from "../../shared/contexts";

export const Login = ()=> {

    const { toggleTheme } = useAppThemeContext()

    const navigate = useNavigate();

    const handleClick = ()=> {
        navigate('/dashboard')
    }

    return (
        <div>
            <p>Login</p>
            <Button onClick={toggleTheme} variant="contained" color="primary">Oi</Button>
        </div>
    )
}