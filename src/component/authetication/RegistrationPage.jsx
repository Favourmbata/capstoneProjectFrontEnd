
import {Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const RegistrationPage = ()=>{
    const navigate = useNavigate();
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl text-center text-gray-500 mb-10">Register As</h1>
            <div className="flex flex-col space-y-6">
                <Button
                    variant="contained"
                    onClick={() => navigate("/sign-up")}
                    sx={{
                        width: '200px',
                        height: '50px',
                        backgroundColor: 'blue',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkblue',
                        },
                    }}
                >
                    SERVICE PROVIDER
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigate("/customerRegister")}
                    sx={{
                        width: '200px',
                        height: '50px',
                        backgroundColor: 'blue',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkblue',
                        },
                    }}
                >
                    CUSTOMER
                </Button>
            </div>
        </div>
    );
}
export default RegistrationPage;