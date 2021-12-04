import { injectedConnector } from "./connectors";

export const connectWallet = async(activate,errorMessageCallback)=>{
    
    await activate(injectedConnector, async (error) => {
        console.log({ error });
        errorMessageCallback(error.message);
    });
}