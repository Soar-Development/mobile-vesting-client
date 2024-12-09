# Mobile Vesting Client

This project is a client for interacting with a Solana-based vesting contract. It includes scripts to retrieve contract information and unlock tokens.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/mobile-vesting-client.git
   cd mobile-vesting-client
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

### Retrieve Contract Information

To fetch and decode contract information, run the following command:
```sh
npx tsx retrieveContractInfo.ts
```

Example output:
```
Fetching contract  64Ew9yBixQuKoaH4k471euDv7d1emMsfZ4mVsUzjqDcs
(node:18021) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
Decoded Contract Info: {
  destinationAddress: 'C5XdofUP3E58C251pwmPJGWyDVaBg6Qc8HPEkVT6c5QV',
  mintAddress: '6LYGMPnpZnCh4tPGDCdUREmig5SA5NPj2BssYhCerZcP',
  schedules: [
    { index: 1, releaseTime: '2024-12-09T08:03:00.000Z', amount: '0' },
    { index: 2, releaseTime: '2024-12-09T08:05:30.000Z', amount: '0' }
  ]
}
```

### Unlock Tokens

To unlock tokens according to the vesting schedule, run the following command:
```sh
npx tsx unlock_example.ts
```

Example output:
```
Fetching contract  64Ew9yBixQuKoaH4k471euDv7d1emMsfZ4mVsUzjqDcs
(node:17362) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
Transaction signature: 3gAsm9EcdwkrRET4XA3QrDnaWZtrNA2214wjQpB8AZAGf1EyDesDLy5Y8HabxeyyJ2qMFsLux9NnUyLXmYEKN4dk
```

## License

This project is licensed under the MIT License.
```