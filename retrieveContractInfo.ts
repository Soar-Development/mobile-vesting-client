import { Connection, PublicKey } from '@solana/web3.js';
import { getContractInfo } from './main';
import BN from 'bn.js';

// Your RPC connection
const connection = new Connection('https://api.mainnet-beta.solana.com');

// Replace with the vesting account public key
const VESTING_ACCOUNT_PUBLIC_KEY = new PublicKey(''); //fetch it from https://airdrop.soarchain.com/SolanaWallet?wallet=

/** Decode BN timestamp to a human-readable date */
const decodeTimestamp = (timestamp: BN): string => {
  const date = new Date(timestamp.toNumber() * 1000); // Convert seconds to milliseconds
  return date.toISOString(); // ISO string format for readability
};

/** Decode the schedules array */
const decodeSchedules = (schedules: any[], decimals: number) => {
  return schedules.map((schedule, index) => ({
    index: index + 1,
    releaseTime: decodeTimestamp(schedule.releaseTime),
    amount: schedule.amount.div(new BN(10 ** decimals)).toString(), // Adjust amount based on token decimals
  }));
};

const retrieveContractInfo = async () => {
  try {
    const contractInfo = await getContractInfo(connection, VESTING_ACCOUNT_PUBLIC_KEY);

    // Decode contract info
    const decodedInfo = {
      destinationAddress: contractInfo.destinationAddress.toBase58(),
      mintAddress: contractInfo.mintAddress.toBase58(),
      schedules: decodeSchedules(contractInfo.schedules, 6), // Replace 6 with your token's decimal places
    };

    console.log('Decoded Contract Info:', decodedInfo);
  } catch (error) {
    console.error('Error retrieving contract info:', error);
  }
};

retrieveContractInfo();
