pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MarkToken is ERC20 {
    uint constant _initial_supply = 1000 * (10 ** 18);

    constructor() ERC20("MarkToken", "MRK") {
        _mint(msg.sender, _initial_supply);
    }

    function airdrop(address[] memory recipients, uint256 amount) public {
    require(recipients.length > 0, "The recipients array cannot be empty");
    require(amount > 0, "The amount to be airdropped must be greater than zero");

    for (uint256 i = 0; i < recipients.length; i++) {
        _mint(recipients[i], amount);
    }
}
}
