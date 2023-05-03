async function main() {
	const [deployer] = await ethers.getSigners();

	console.log('Deploying contracts with the account:', deployer.address);

	const weiAmount = (await deployer.getBalance()).toString();

	console.log('Account balance:', await ethers.utils.formatEther(weiAmount));

	// make sure to replace the "GoofyGoober" reference with your own ERC-20 name!
	const Token = await ethers.getContractFactory('MarkToken');
	const token = await Token.deploy();
	const recipients = [
		'0x4937D731BB95460Db0D4390a654cabe6Baa67887',
		'0x1b277f499D300C651F67B9a3246E129D09b0d3Ea',
		'0x93A181F02614E8C74c7e6a8b9d53974a3366735a',
		'0x7Bb84af463A0798Cd78FF67106D18e3A25d482A4',
		'0x3Af36E0126B4C2bE772110DAd6c6877519Ea60b6',
	];
	const amount = await ethers.utils.parseEther('10');
	const tx = await token.airdrop(recipients, amount);
	console.log('Token address:', token.address);

	// Wait for the transaction to be mined
	const receipt = await tx.wait();

	// Check if the transaction was successful
	if (receipt.status === 1) {
		console.log('Airdrop successful');
	} else {
		console.log('Airdrop failed');
	}
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
