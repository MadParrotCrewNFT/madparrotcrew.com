// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "contract/MadParrotCrew.sol";

contract ContractTest is Test {
    MadParrotCrew mpc;
    address admin = 0x5Fea9DAcdE1fb43E87b8a9259Aebc937D995F51b;
    address dev = 0xbee683d39F969f13Ec44D7Da12aF108842CA7cb7;
    address minter = 0x46F21698726d22d270040Ea720B2d2E72e054888;
    address teamWallet = 0x443B3af4A1920F492F2090973ae2d0Aa81b892aa;

    uint16 maxAfterPremint = 6969 - 30;

    function setUp() public {
        uint256[] memory shares = new uint256[](2);
        shares[0] = 20;
        shares[1] = 80;

        address[] memory payees = new address[](2);
        payees[0] = dev;
        payees[1] = admin;

        vm.prank(dev);
        mpc = new MadParrotCrew(admin, payees, shares);

        vm.deal(admin, 1000 ether);
        vm.deal(dev, 1000 ether);
        vm.deal(minter, 1000 ether);
    }

    function testOwnership() public {
        assertEq(mpc.owner(), admin, "Owner is not admin");
    }

    function enableMint() public {
        vm.startPrank(dev);
        mpc.premint(teamWallet);
        mpc.setIsSaleActive(true);
        mpc.setBaseURI("https://fancyrats.io/");
        vm.stopPrank();
    }

    function testSanity() public {
        vm.prank(minter);
        vm.expectRevert("Sale is not active");
        mpc.mint{value: 0.069 * 1 ether}(2, minter);

        enableMint();

        vm.expectRevert("Not enough ether");
        vm.prank(minter);
        mpc.mint{value: 0.069 * 1 ether}(2, minter);

        vm.expectRevert("Exceeds max per wallet");
        vm.prank(minter);
        mpc.mint{value: 0.069 * 3 ether}(3, minter);
    }

    function testMaxSupply() public {
        enableMint();
        vm.prank(dev);
        mpc.setMaxMintPerWallet(10000);

        vm.prank(dev);
        mpc.mint{value: 0.069 * 6939 ether}(6939, dev);

        vm.prank(minter);
        vm.expectRevert("Exceeds max supply");
        mpc.mint{value: 0.069 ether}(1, minter);
    }

    function testWithdrawFunction() public {
        enableMint();
        vm.prank(dev);
        mpc.setMaxMintPerWallet(10000);

        vm.prank(minter);
        mpc.mint{value: 0.069 * 6939 ether}(6939, minter);

        mpc.release(payable(dev));

        assertEq(
            dev.balance,
            1000 ether + (0.069 * 6939 ether) * 0.2,
            "Dev balance is wrong"
        );

        mpc.release(payable(admin));
        assertEq(
            admin.balance,
            1000 ether + (0.069 * 6939 ether) * 0.8,
            "Admin balance is wrong"
        );
    }

    function testLock() public {
        enableMint();

        vm.startPrank(minter);
        mpc.mint{value: 0.069 * 2 ether}(2, minter);
        mpc.mint{value: 0.069 * 2 ether}(2, dev);
        mpc.mint{value: 0.069 * 2 ether}(2, admin);
        vm.stopPrank();

        vm.prank(dev);
        mpc.lockMinting();
        vm.expectRevert("Minting is locked");
        vm.startPrank(minter);
        mpc.mint{value: 0.069 * 2 ether}(2, minter);
        vm.stopPrank();

        vm.prank(admin);
        vm.expectRevert("Minting is already locked");
        mpc.lockMinting();
    }

    function testMint() public {
        enableMint();

        vm.prank(minter);
        mpc.mint{value: 0.069 * 2 ether}(2, minter);

        assertEq(mpc.balanceOf(minter), 2, "Should mint 2");
    }

    function testBaseURI() public {
        enableMint();

        vm.prank(minter);
        mpc.mint{value: 0.069 ether}(1, minter);

        assertEq(
            mpc.tokenURI(0),
            "https://fancyrats.io/0",
            "Base URI is not set"
        );
    }

    function testPremint() public {
        enableMint();
        assertEq(mpc.balanceOf(teamWallet), 30, "Preminted successfully");
    }
}
