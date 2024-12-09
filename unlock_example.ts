import { Connection, PublicKey, Keypair, sendAndConfirmTransaction, Transaction } from '@solana/web3.js';
import { unlock } from './main'; 
import fs from 'fs'; 

// Your RPC connection
const connection = new Connection('https://api.devnet.solana.com');

// Replace with your program ID, seed word, and mint address
const PROGRAM_ID = new PublicKey('DLxB9dSQtA4WJ49hWFhxqiQkD9v6m67Yfk9voxpxrBs4');
const SEED_WORD = Buffer.from('8480455876880577823408444322979835520808826266033665891834125981');
const MINT_ADDRESS = new PublicKey('6LYGMPnpZnCh4tPGDCdUREmig5SA5NPj2BssYhCerZcP');

// Replace with your wallet's keypair
const WALLET_PATH = '/home/alp/.config/solana/soarMN9ky6JHALASZPNEmg4yUVP34g25gSULxvHBXPX.json';
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