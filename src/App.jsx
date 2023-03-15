import React, { useEffect, useState } from "react";
import {abi} from "./utils/WavePortal";
import bg from "./assets/bg.svg"
import { ethers } from "ethers";

const App = () => {
  
  const [currentAccount, setCurrentAccount] = useState("");
  const contractAddress = "0x286e42AF89072433f372d0E1Caf1a19C6aA20634";
  const contractABI = abi.abi;
  const [waveCount,setWaveCount] = useState(0);
  const [allWaves, setAllWaves] = useState([]);
  const [msgInput, setMsgInput] = useState("");

  const handleChange = (e) => {
    setMsgInput(e.target.value);
  }

  console.log(abi)

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account)
        getAllWaves()
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
    } catch (error) {
      console.log(error)
    }
  }

  const wave = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());

        const waveTxn = await wavePortalContract.wave(msgInput);
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);

        setMsgInput("");
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getCount = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
    let count = await wavePortalContract.getTotalWaves();
    setWaveCount(count.toNumber())
  }
  getCount();

  const getAllWaves = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        const waves = await wavePortalContract.getAllWaves();

        let wavesCleaned = [];
        waves.forEach(wave => {
          wavesCleaned.push({
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message
          });
        });

        setAllWaves(wavesCleaned);
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  useEffect(() => {
    getCount();
    getAllWaves();
  }, [wave])
  
  return (
    <div className="">
      <img src={bg} className="fixed top-0 left-0 -z-10 w-full h-full object-cover" alt="background image"/>
      <div className="z-0 flex items-center justify-start bg-black/30 w-full min-h-screen py-10">
        <div className="container mx-auto flex flex-col lg:flex-row justify-start  items-start text-white px-5">
          <div className="w-full lg:w-[50%]">
           <div className="flex justify-end w-full">
              {!currentAccount && (
                <button 
                  className="bg-blue-600 text-white font-bold p-3 rounded-md" 
                  onClick={connectWallet}>
                  Connect Wallet
                </button>
              )}
            </div> 
            <div className="text-3xl sm:text-4xl xl:text-5xl my-10">
            Hey there!, <br/> Welcome to Wave Portal 👋
            </div>
            <div className="text-md sm:text-lg xl:text-xl italic text-left mt-10 mb-5">
              <p>
                I'm Kevin Paul, a Full Stack Web Developer. 
              </p>
              <p>
                Here's an app I built following the BuildSpace Ethereum Dapp Course.   
              </p>
              <p>
                Feel free to wave at me!
              </p>
            </div>
            <div className="flex-col sm:flex-row mb-10">
              <input 
                type="text" 
                placeholder="Send a message!" 
                value={msgInput} 
                onChange={handleChange}
                className="bg-white/80 focus:bg-white/90 focus:caret-black border-2 focus:outline-none border-neutral-600/80 text-black rounded-md p-3 w-[78%] mr-5"
              />
              <button 
                className="hover:bg-blue-600 border-2 border-white hover:border-blue-600 text-white transition duration-300 text-black font-bold p-3 rounded-md mt-5" 
                onClick={wave}
              >
                Wave at Me 👋
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-10">
            <div className="w-full">
               <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                Checkout messages from others!
               </h1>
              <p className="text-white text-md font-semibold mb-5">
                Wave Count: {waveCount}
              </p>
              {allWaves.length > 0  
                ? <div className="">
                 {allWaves.map((wave, index) => {
                    return (
                    <div key={index} className="bg-white/60 rounded-md text-black py-2 px-3 mb-2">
                      <div className="truncate"><span className="text-blue-600 font-semibold">Address</span>: {wave.address}</div>
                      <div><span className="text-blue-600 font-semibold">Time</span>: {wave.timestamp.toLocaleString()}</div>
                      <div><span className="text-blue-600 font-semibold">Message</span>: {wave.message}</div>
                    </div>)
                  })}
                </div>
                : <div className="bg-white/60 rounded-md text-black py-2 px-3">
                 No messages yet! 😔
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;