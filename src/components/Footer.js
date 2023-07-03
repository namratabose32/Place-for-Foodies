import { useContext } from "react";
import userContext from "../../utils/userContext";
const Footer=()=> {
    const {user}=useContext(userContext);
    return(
        <>
            <h3>Created by {user.name} - {user.email} with ❤️</h3>
        </>
    )
}
export default Footer;