import { createContext } from "react";
const userContext = createContext({
    user :{name: "Namrata Bose",
    email: "namratabose32@gmail.com"},
});
userContext.displayName="UserContext";
export default userContext;