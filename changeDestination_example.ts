import { Connection, PublicKey, Keypair, sendAndConfirmTransaction, Transaction } from '@solana/web3.js';
import { changeDestination } from './main';
import fs from 'fs';

// Your RPC connection
const connection = new Connection('https://api.mainnet-beta.solana.com');

// Replace with your program ID
const PROGRAM_ID = new PublicKey('CChTq6PthWU82YZkbveA3WDf7s97BWhBK4Vx9bmsT743');

// Current destination token account public key
const CURRENT_DESTINATION = new PublicKey('');

// New destination token account owner (optional if providing new destination token account directly)
const NEW_DESTINATION_OWNER = new PublicKey('');

// New destination token account (optional if providing new owner)
const NEW_DESTINATION_ACCOUNT = undefined;

// Vesting seed (must match the seed used to create the vesting contract)
const VESTING_SEED = Buffer.from('');

// Replace with your wallet's keypair path
const WALLET_PATH = '';
const wallet = Keypair.fromSecretKey(
  new Uint8Array(JSON.parse(fs.readFileSync(WALLET_PATH).toString())),
);

const executeChangeDestination = async () => {
  try {
    const instructions = await changeDestination(
      connection,
      PROGRAM_ID,
      CURRENT_DESTINATION,
      NEW_DESTINATION_OWNER,
      NEW_DESTINATION_ACCOUNT,
      [VESTING_SEED]
    );

    const transaction = new Transaction().add(...instructions);
    const signature = await sendAndConfirmTransaction(connection, transaction, [wallet]);

    console.log('Transaction signature:', signature);
  } catch (error) {
    console.error('Error executing change destination:', error);
  }
};

executeChangeDestination(); 