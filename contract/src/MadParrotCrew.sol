// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "ERC721A/ERC721A.sol";
import "openzeppelin-contracts/contracts/finance/PaymentSplitter.sol";
import "openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol";

// fancyrats.io
contract MadParrotCrew is ERC721A, PaymentSplitter, AccessControlEnumerable {
    uint256 public constant MAX_SUPPLY = 6969;

    uint256 public maxPerWallet = 2;
    uint256 public mintPrice = 0.069 ether;

    string public baseURI_;

    bool public isSaleActive;
    bool public mintingLocked; // Burn the rest

    constructor(
        address _admin,
        address[] memory payees,
        uint256[] memory shares
    ) ERC721A("Mad Parrot Crew", "MPC") PaymentSplitter(payees, shares) {
        _grantRole(DEFAULT_ADMIN_ROLE, _admin);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function mint(uint256 _amount, address _to) public payable {
        require(!mintingLocked, "Minting is locked");
        require(isSaleActive, "Sale is not active");
        require(
            _amount + _numberMinted(_to) <= maxPerWallet,
            "Exceeds max per wallet"
        );
        require(msg.value == (mintPrice * _amount), "Not enough ether");
        require(_amount + totalSupply() <= MAX_SUPPLY, "Exceeds max supply");

        _mint(_to, _amount);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI_;
    }

    function setBaseURI(string memory __baseURI)
        public
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        baseURI_ = __baseURI;
    }

    function owner() public view returns (address) {
        return getRoleMember(DEFAULT_ADMIN_ROLE, 0);
    }

    function supportsInterface(bytes4 interfaceID)
        public
        view
        override(ERC721A, AccessControlEnumerable)
        returns (bool)
    {
        return
            ERC721A.supportsInterface(interfaceID) ||
            AccessControlEnumerable.supportsInterface(interfaceID);
    }

    function setIsSaleActive(bool _isSaleActive)
        public
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        isSaleActive = _isSaleActive;
    }

    function lockMinting() public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(!mintingLocked, "Minting is already locked");
        isSaleActive = false;
        mintingLocked = true;
    }

    function setMintPrice(uint256 _mintPrice)
        public
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        mintPrice = _mintPrice;
    }

    function setMaxMintPerWallet(uint256 _maxPerWallet)
        public
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        maxPerWallet = _maxPerWallet;
    }
}
