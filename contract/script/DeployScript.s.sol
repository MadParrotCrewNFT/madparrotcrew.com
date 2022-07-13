// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "contract/MadParrotCrew.sol";

contract DeployScript is Script {
    address dev = 0x310F7D1344B56B8962191F014fc50F0bCf84bC6f;
    address admin = 0x0B425DcBdf2E3BBCEe6dAeAC208Af70cA4199e90;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        address[] memory payees = new address[](2);
        payees[0] = dev;
        payees[1] = admin;

        uint256[] memory shares = new uint256[](2);
        shares[0] = 20;
        shares[1] = 80;

        MadParrotCrew mpc = new MadParrotCrew(admin, payees, shares);
        vm.stopBroadcast();
    }
}
