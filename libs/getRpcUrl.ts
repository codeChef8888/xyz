export const nodes = [process.env.NEXT_PUBLIC_RPC_URL]

const getRpcUrl = (): string => {
  return process.env.NEXT_PUBLIC_RPC_URL as string;
}

export default getRpcUrl;