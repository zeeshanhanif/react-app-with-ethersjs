import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react";
import { injectedConnector } from "../utils/connectors";



const useEagerConnect = ()=>{
    const {activate, active} = useWeb3React();
    
    useEffect(async ()=>{
        (async ()=>{
            const isAuthorized = await injectedConnector.isAuthorized();
            console.log("isAuthorized= ",isAuthorized);
            
            await activate(injectedConnector, async (error) => {
                console.log({ error });
                alert(error.message);
            });
        })();
    },[activate])
}

export default useEagerConnect;