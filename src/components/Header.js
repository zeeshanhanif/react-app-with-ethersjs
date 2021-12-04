import { useWeb3React } from "@web3-react/core";
import { connectWallet } from "../utils/connectWallet";

function Header(props) {

    const {
        active,
        activate,
    } = useWeb3React();
    
    console.log("is active check = ",active);
    return (
        <div style={{ display:"flex", flexGrow:"6", justifyContent:"flex-end", paddingRight:"10px" }}   >
            {
                active? <div style={{display:"inline-block", backgroundColor:"white", borderRadius:"40px", 
                                padding:"8px", border:"1px dashed black", marginLeft:"10px",marginTop:"10px"}}
                                >Connected</div>
                    :
                    <div style={{display:"inline-block", backgroundColor:"white", borderRadius:"40px", 
                                    padding:"8px", border:"1px dashed black", marginLeft:"10px",marginTop:"10px", cursor: "pointer"}}
                                    onClick={()=>{
                                        connectWallet(activate, props.setErrorMessage);
                                    }}
                                    >Connect Wallet</div>
            }
        </div>
    );
}

export default Header;
