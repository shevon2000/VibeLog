import { Typography } from "@mui/material";
import { useLocation, Navigate, Outlet } from "react-router";
import { useAccount } from "../../lib/hooks/useAccount";

export default function RequireAuth() {
    const { currentUser, loadingUserInfo } = useAccount();
    const location = useLocation( );
    
    if (loadingUserInfo) return <Typography>Loading...</Typography>
    
    if (!currentUser) return <Navigate to='/login' state={{from: location}} />
    
    return(
        <Outlet />
    )
}