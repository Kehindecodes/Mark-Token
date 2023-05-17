# Mark Token

Mark Token is an ERC20 token created using Hardhat, Solidity, and JavaScript. It is designed to be airdropped and has been deployed on the Polygon network. The project aims to provide an efficient and cost-effective solution for token transfers, addressing the challenge of high gas fees on the Ethereum network.

## Features

- ERC20 Standard: Mark Token follows the ERC20 token standard, ensuring compatibility with various decentralized applications (dApps) and exchanges.
- Airdrop Functionality: The token contract includes an airdrop feature, allowing users to distribute tokens to multiple addresses at once.
- Efficient Transfer Mechanism: The project leverages the Polygon network to mitigate the high gas fees associated with Ethereum, enabling fast and cost-effective token transfers.

## Getting Started

To get started with Mark Token on your local machine, follow these steps:

### Prerequisites

- Node.js (v14.0.0 or later)
- Hardhat (v2.0.0 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mark-token.git
   ```

2. Install the dependencies:

   ```bash
   cd mark-token
   npm install
   ```

### Usage

1. Compile the contracts:

   ```bash
   npx hardhat compile
   ```

2. Run the tests:

   ```bash
   npx hardhat test
   ```

3. Deploy the token contract:

   ```bash
   npx hardhat run scripts/deploy.js --network polygon
   ```

   Note: Ensure that you have configured the `polygon` network in your Hardhat configuration file (`hardhat.config.js`) with the required credentials.

4. Interact with the deployed contract using the provided JavaScript examples in the `scripts` directory.


Happy tokenizing with Mark Token!
