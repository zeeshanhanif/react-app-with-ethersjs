import { ethers } from "ethers";


// returns ethers.providers.Web3Provider
export const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
}