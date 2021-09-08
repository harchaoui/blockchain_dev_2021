// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Volcanocoin {
  uint256  private _totalSupply  = 1000;
  address owner;

  mapping(address => uint256 ) public balance;

  event supplyChange(uint256);

  constructor(){
      owner = msg.sender;
  }

  modifier onlyOwner (){
      if (msg.sender == owner){
          _;
      }
  } 

  function getTotalSupply() view public returns (uint256) {
      return _totalSupply;
  }
  function increaseSupply() public onlyOwner {
      _totalSupply +=1000;
    emit supplyChange(_totalSupply);

  }

  function getBalance(address addr) public view returns (uint256) {
      return balance[addr];
  }

}