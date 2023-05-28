import { useWeb3React } from "@web3-react/core";
import getRpcUrl from "./getRpcUrl";
import { getLibrary } from "./web3React";

const ethers = require("ethers");
const providerURL = getRpcUrl();
// const library = getLibrary(providerURL as string);
const provider = new ethers.providers.JsonRpcProvider(providerURL);
export const getBalance = (address: any) => {
  provider.getBalance(address).then((balance: any) => {
    const balanceInEth = ethers.utils.formatEther(balance);
    console.log(`balance: ${balanceInEth} BSC`);
  });
};
