import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

function Home() {

  const {
    connector,
    library,
    account,
    chainId,
    activate,
    deactivate,
    active,
    error
  } = useWeb3React();
  const [balance, setBalance] = useState();

  useEffect(()=>{
    (async ()=>{
      if(library && account){
        try {
          const _balance = await library.getBalance(account);
          setBalance(ethers.utils.formatEther(_balance));
        }
        catch(error){
          console.log("Error ",error.message);
          setBalance("0");
        }
        return () => {
          setBalance(undefined);
        };
      }
    })();
  }, [library, account, chainId]);

  return (
    <div>
      <div>Hello Web3 World</div><br/>
      <div>Chain Id: {chainId}</div><br/>
      <div>Account: {account}</div><br/>
      <div>Balance: {balance}</div>
    </div>
  );
}

export default Home;
