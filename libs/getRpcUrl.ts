export const nodes = [process.env.NEXT_PUBLIC_RPC_URL]

const getRpcUrl = () => {
  return process.env.NEXT_PUBLIC_RPC_URL;
}

export default getRpcUrl;