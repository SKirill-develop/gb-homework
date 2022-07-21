import { useState, useEffect } from "react";
import Contract from "web3-eth-contract";
import Web3 from "web3";

const tokenABI = require("./ERC20.json");

const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const recipient = "0x8b8a4abc707F16dA24B795e3e46ed22975A9D329";
const wallet = '0xc2426D86Ee940b082dAFFDB79f5d9D529834F89B'

function App() {
  const [addressContract, setAddressContract] = useState("");
  const [addressBalance, setAddressBalance] = useState("");

  async function loadBlockChain() {
    console.log(tokenABI);
    let web3 = await new Web3(
      Web3.providers.HttpProvider(
        "https://mainnet.infura.io/v3/df8ce6cce2784bb7bef17082aa23ca89"
      )
    );

    await Contract.setProvider(
      "https://mainnet.infura.io/v3/df8ce6cce2784bb7bef17082aa23ca89"
    );

    const contract = new Contract(tokenABI, contractAddress);

    console.log(contract);
    setAddressContract(contract._address);

    await contract.methods
      .balanceOf(recipient)
      .call()
      .then((res) => setAddressBalance(res));


  const tx = await contract.methods.transfer(wallet,10000).encodeABI();
  console.log(tx)
}
  useEffect(() => loadBlockChain, []);
  return (
    <div>
      <p>Адрес контракта: {addressContract} USDT</p>
      <p>
        На кошельке 0x8b8a4abc707F16dA24B795e3e46ed22975A9D329 сейчас: 
        {addressBalance / 1000000} USDT
      </p>
    </div>
  );
}

export default App;
