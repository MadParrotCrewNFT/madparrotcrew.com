// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "ERC721A/ERC721A.sol";

import "openzeppelin-contracts/contracts/finance/PaymentSplitter.sol";
import "openzeppelin-contracts/contracts/utils/Address.sol";
import "openzeppelin-contracts/contracts/utils/Strings.sol";
import "openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol";

import "chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";

// fancyrats.io
contract MadParrotCrew is
    ERC721A,
    PaymentSplitter,
    AccessControlEnumerable,
    VRFConsumerBaseV2
{
    using Address for address;
    using Strings for string;

    uint256 public constant MAX_SUPPLY = 6969;
    uint256 public constant RESERVE = 400;

    uint256 public maxPerWallet = 2;
    uint256 public mintPrice = 0.069 ether;

    string public baseURI_;
    bool public revealed;

    bool public isSaleActive;
    bool public mintingLocked; // Burn the rest
    bool public preminted;

    VRFCoordinatorV2Interface VRFCoordinator;
    bytes32 public gasLaneKeyHash;
    uint64 public linkSubscriptionId;
    uint32 public callbackGasLimit;
    uint16 public requestConfirmations;
    uint256 public randomRequestId;

    uint256 public tokenOffset;
    string public constant PROVENANCE_HASH = "";

    constructor(
        address _admin,
        address[] memory payees,
        uint256[] memory shares
    )
        ERC721A("Mad Parrot Crew", "MPC")
        PaymentSplitter(payees, shares)
        VRFConsumerBaseV2(0x271682DEB8C4E0901D1a1550aD2e64D568E69909)
    {
        _grantRole(DEFAULT_ADMIN_ROLE, _admin);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);

        VRFCoordinator = VRFCoordinatorV2Interface(
            0x271682DEB8C4E0901D1a1550aD2e64D568E69909
        );
        gasLaneKeyHash = 0x8af398995b04c28e9951adb9721ef74c74f93e6a478f39e7e0777be13527e7ef;
        linkSubscriptionId = 37;
        callbackGasLimit = 400000;
        requestConfirmations = 3;
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

        _safeMint(_to, _amount);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI_;
    }

    function setBaseURI(string memory __baseURI)
        public
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        require(!revealed, "Already revealed");
        baseURI_ = __baseURI;
    }

    function setRevealed(bool _revealed) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(!revealed, "Already revealed");
        revealed = _revealed;
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
        require(preminted, "Premint before sale");
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

    function premint(address _to) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(!preminted, "Already preminted");
        _safeMint(_to, RESERVE);
        preminted = true;
    }

    // Chainlink
    function generateTokenOffset() public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(tokenOffset == 0, "Token offset already set");

        randomRequestId = VRFCoordinator.requestRandomWords(
            gasLaneKeyHash,
            linkSubscriptionId,
            requestConfirmations,
            callbackGasLimit,
            2
        );
    }

    function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords)
        internal
        override
    {
        tokenOffset = randomWords[0];
        if (tokenOffset == 0) {
            tokenOffset = randomWords[1];
        }
    }

    function setGasLaneKeyHash(bytes32 _gasLaneKeyHash)
        public
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        gasLaneKeyHash = _gasLaneKeyHash;
    }

    function setLinkSubscriptionId(uint64 _linkSubscriptionId)
        public
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        linkSubscriptionId = _linkSubscriptionId;
    }

    function setCallbackGasLimit(uint32 _callbackGasLimit)
        public
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        callbackGasLimit = _callbackGasLimit;
    }

    function setRequestConfirmations(uint16 _requestConfirmations)
        public
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        requestConfirmations = _requestConfirmations;
    }
}
