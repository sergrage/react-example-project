import { ReactNode, FC } from "react";
import { Navigate } from "react-router-dom";

type Tprops = {
    children?: ReactNode,
    isAunteficated: boolean | null
};

const PrivateRoute: FC<Tprops> = ({ children, isAunteficated }) => {
    return isAunteficated ? (children) : <Navigate to={'/'} />
}

export default PrivateRoute;