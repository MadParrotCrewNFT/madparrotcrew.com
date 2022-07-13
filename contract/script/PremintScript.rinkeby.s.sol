// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "contract/MadParrotCrew.sol";

interface IMadParrotCrew {
    function premint(address to) external;
}

contract DeployScript is Script {
    IMadParrotCrew mpc;

    function setUp() public {
        mpc = IMadParrotCrew(0x6e98fA569BCD02a157B5b7a67f24c0Da3bD36fD5);
    }

    function run() public {
        vm.startBroadcast();
        mpc.premint(0xF2A1929B514a14a58d2a23e29aF3460d42B38C27);
        vm.stopBroadcast();
    }
}
