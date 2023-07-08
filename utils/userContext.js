import { createContext } from "react";
const userContext = createContext({
    user :{name: "Disha Bose",
    email: "dishabose7979@gmail.com"},
});
userContext.displayName="UserContext";
export default userContext;