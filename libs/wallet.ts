// Set of helper functions to facilitate wallet setup
import { nodes } from './getRpcUrl'

const BASE_BSC_SCAN_URL = "https://bscscan.com";
const BASE_URL = "http://localhost:3000";

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
//For window
declare var window: any

export const setupNetwork = async () => {
  const provider = window.ethereum
  if (provider) {
    const chainId = parseInt("56", 10)
    try {
      console.log("chainId", chainId);
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x38`,
            chainName: 'Binance Smart Chain Mainnet',
       rpcUrls: ["https://bsc-dataseed.binance.org"],
          }
        ]
      })
      return true
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error)
      return false
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
    return false
  }
}

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (tokenAddress: any, tokenSymbol: any, tokenDecimals: any) => {
  const tokenAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: `${BASE_URL}/images/tokens/${tokenAddress}.png`,
      },
    },
  })

  return tokenAdded
}