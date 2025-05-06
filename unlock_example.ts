import { Connection, PublicKey, Keypair, sendAndConfirmTransaction, Transaction } from '@solana/web3.js';
import { unlock } from './main'; 
import fs from 'fs'; 

// Your RPC connection
const connection = new Connection('https://api.mainnet-beta.solana.com');

// Replace with your program ID, seed word, and mint address 
const PROGRAM_ID = new PublicKey('CChTq6PthWU82YZkbveA3WDf7s97BWhBK4Vx9bmsT743');
const SEED_WORD = Buffer.from('8480455876880577823408444322979835520808826266033665891834125981'); // fetch it from https://airdrop.soarchain.com/SolanaWallet?wallet=
const MINT_ADDRESS = new PublicKey('9359LVZJs8bf2FXcTdHvwcMnvg2ZCf6DUZ5ABDcJKx52');

// Replace with your wallet's keypair
const WALLET_PATH = '';
const wallet = Keypair.fromSecretKey(
  new Uint8Array(JSON.parse(fs.readFileSync(WALLET_PATH).toString())),
);

const executeUnlock = async () => {
  try {
    const instructions = await unlock(connection, PROGRAM_ID, SEED_WORD, MINT_ADDRESS);

    const transaction = new Transaction().add(...instructions);
    const signature = await sendAndConfirmTransaction(connection, transaction, [wallet]);

    console.log('Transaction signature:', signature);
  } catch (error) {
    console.error('Error executing unlock:', error);
  }
};

executeUnlock();