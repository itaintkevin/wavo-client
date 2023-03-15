export const abi = {
  "_format": "hh-sol-artifact-1",
  "contractName": "WavePortal",
  "sourceName": "contracts/WavePortal.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "NewWave",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "getAllWaves",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "waver",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct WavePortal.Wave[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalWaves",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "wave",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526200003360405180606001604052806025815260200162001252602591396200003960201b620004a71760201c565b620001c3565b620000d9816040516024016200005091906200019f565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000dc60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200014157808201518184015260208101905062000124565b60008484015250505050565b6000601f19601f8301169050919050565b60006200016b8262000105565b62000177818562000110565b93506200018981856020860162000121565b62000194816200014d565b840191505092915050565b60006020820190508181036000830152620001bb81846200015e565b905092915050565b61107f80620001d36000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063449d46c0146100465780639a2cdc0814610062578063bd43a90814610080575b600080fd5b610060600480360381019061005b91906107fe565b61009e565b005b61006a61030b565b6040516100779190610860565b60405180910390f35b610088610356565b6040516100959190610a5c565b60405180910390f35b60016000808282546100b09190610aad565b925050819055506100f76040518060400160405280600d81526020017f25732068617320776176656421000000000000000000000000000000000000008152503383610540565b600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816101af9190610ced565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea7164283604051610204929190610e09565b60405180910390a26000655af3107a400090504781111561025a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025190610eab565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161028090610efc565b60006040518083038185875af1925050503d80600081146102bd576040519150601f19603f3d011682016040523d82523d6000602084013e6102c2565b606091505b5050905080610306576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fd90610f83565b60405180910390fd5b505050565b600061034e6040518060400160405280601781526020017f5765206861766520256420746f74616c207761766573210000000000000000008152506000546105df565b600054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561049e57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461040390610b10565b80601f016020809104026020016040519081016040528092919081815260200182805461042f90610b10565b801561047c5780601f106104515761010080835404028352916020019161047c565b820191906000526020600020905b81548152906001019060200180831161045f57829003601f168201915b505050505081526020016002820154815250508152602001906001019061037a565b50505050905090565b61053d816040516024016104bb9190610fa3565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061067b565b50565b6105da83838360405160240161055893929190610fd4565b6040516020818303038152906040527fe0e9ad4f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061067b565b505050565b61067782826040516024016105f5929190611019565b6040516020818303038152906040527fb60e72cc000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061067b565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61070b826106c2565b810181811067ffffffffffffffff8211171561072a576107296106d3565b5b80604052505050565b600061073d6106a4565b90506107498282610702565b919050565b600067ffffffffffffffff821115610769576107686106d3565b5b610772826106c2565b9050602081019050919050565b82818337600083830152505050565b60006107a161079c8461074e565b610733565b9050828152602081018484840111156107bd576107bc6106bd565b5b6107c884828561077f565b509392505050565b600082601f8301126107e5576107e46106b8565b5b81356107f584826020860161078e565b91505092915050565b600060208284031215610814576108136106ae565b5b600082013567ffffffffffffffff811115610832576108316106b3565b5b61083e848285016107d0565b91505092915050565b6000819050919050565b61085a81610847565b82525050565b60006020820190506108756000830184610851565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108d2826108a7565b9050919050565b6108e2816108c7565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610922578082015181840152602081019050610907565b60008484015250505050565b6000610939826108e8565b61094381856108f3565b9350610953818560208601610904565b61095c816106c2565b840191505092915050565b61097081610847565b82525050565b600060608301600083015161098e60008601826108d9565b50602083015184820360208601526109a6828261092e565b91505060408301516109bb6040860182610967565b508091505092915050565b60006109d28383610976565b905092915050565b6000602082019050919050565b60006109f28261087b565b6109fc8185610886565b935083602082028501610a0e85610897565b8060005b85811015610a4a5784840389528151610a2b85826109c6565b9450610a36836109da565b925060208a01995050600181019050610a12565b50829750879550505050505092915050565b60006020820190508181036000830152610a7681846109e7565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ab882610847565b9150610ac383610847565b9250828201905080821115610adb57610ada610a7e565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610b2857607f821691505b602082108103610b3b57610b3a610ae1565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610ba37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610b66565b610bad8683610b66565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610bea610be5610be084610847565b610bc5565b610847565b9050919050565b6000819050919050565b610c0483610bcf565b610c18610c1082610bf1565b848454610b73565b825550505050565b600090565b610c2d610c20565b610c38818484610bfb565b505050565b5b81811015610c5c57610c51600082610c25565b600181019050610c3e565b5050565b601f821115610ca157610c7281610b41565b610c7b84610b56565b81016020851015610c8a578190505b610c9e610c9685610b56565b830182610c3d565b50505b505050565b600082821c905092915050565b6000610cc460001984600802610ca6565b1980831691505092915050565b6000610cdd8383610cb3565b9150826002028217905092915050565b610cf6826108e8565b67ffffffffffffffff811115610d0f57610d0e6106d3565b5b610d198254610b10565b610d24828285610c60565b600060209050601f831160018114610d575760008415610d45578287015190505b610d4f8582610cd1565b865550610db7565b601f198416610d6586610b41565b60005b82811015610d8d57848901518255600182019150602085019450602081019050610d68565b86831015610daa5784890151610da6601f891682610cb3565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b6000610ddb826108e8565b610de58185610dbf565b9350610df5818560208601610904565b610dfe816106c2565b840191505092915050565b6000604082019050610e1e6000830185610851565b8181036020830152610e308184610dd0565b90509392505050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e7472616374206861732e000000000000000000000000602082015250565b6000610e95603483610dbf565b9150610ea082610e39565b604082019050919050565b60006020820190508181036000830152610ec481610e88565b9050919050565b600081905092915050565b50565b6000610ee6600083610ecb565b9150610ef182610ed6565b600082019050919050565b6000610f0782610ed9565b9150819050919050565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b6000610f6d602783610dbf565b9150610f7882610f11565b604082019050919050565b60006020820190508181036000830152610f9c81610f60565b9050919050565b60006020820190508181036000830152610fbd8184610dd0565b905092915050565b610fce816108c7565b82525050565b60006060820190508181036000830152610fee8186610dd0565b9050610ffd6020830185610fc5565b818103604083015261100f8184610dd0565b9050949350505050565b600060408201905081810360008301526110338185610dd0565b90506110426020830184610851565b939250505056fea26469706673582212201dd3de8bd6133867a1f14cf6cb4c8eb395a044cc8969a23f682532a43c14c8c264736f6c63430008110033596f20796f2c204920616d206120636f6e747261637420616e64204920616d20736d617274",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063449d46c0146100465780639a2cdc0814610062578063bd43a90814610080575b600080fd5b610060600480360381019061005b91906107fe565b61009e565b005b61006a61030b565b6040516100779190610860565b60405180910390f35b610088610356565b6040516100959190610a5c565b60405180910390f35b60016000808282546100b09190610aad565b925050819055506100f76040518060400160405280600d81526020017f25732068617320776176656421000000000000000000000000000000000000008152503383610540565b600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816101af9190610ced565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea7164283604051610204929190610e09565b60405180910390a26000655af3107a400090504781111561025a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025190610eab565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161028090610efc565b60006040518083038185875af1925050503d80600081146102bd576040519150601f19603f3d011682016040523d82523d6000602084013e6102c2565b606091505b5050905080610306576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fd90610f83565b60405180910390fd5b505050565b600061034e6040518060400160405280601781526020017f5765206861766520256420746f74616c207761766573210000000000000000008152506000546105df565b600054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561049e57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461040390610b10565b80601f016020809104026020016040519081016040528092919081815260200182805461042f90610b10565b801561047c5780601f106104515761010080835404028352916020019161047c565b820191906000526020600020905b81548152906001019060200180831161045f57829003601f168201915b505050505081526020016002820154815250508152602001906001019061037a565b50505050905090565b61053d816040516024016104bb9190610fa3565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061067b565b50565b6105da83838360405160240161055893929190610fd4565b6040516020818303038152906040527fe0e9ad4f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061067b565b505050565b61067782826040516024016105f5929190611019565b6040516020818303038152906040527fb60e72cc000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061067b565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61070b826106c2565b810181811067ffffffffffffffff8211171561072a576107296106d3565b5b80604052505050565b600061073d6106a4565b90506107498282610702565b919050565b600067ffffffffffffffff821115610769576107686106d3565b5b610772826106c2565b9050602081019050919050565b82818337600083830152505050565b60006107a161079c8461074e565b610733565b9050828152602081018484840111156107bd576107bc6106bd565b5b6107c884828561077f565b509392505050565b600082601f8301126107e5576107e46106b8565b5b81356107f584826020860161078e565b91505092915050565b600060208284031215610814576108136106ae565b5b600082013567ffffffffffffffff811115610832576108316106b3565b5b61083e848285016107d0565b91505092915050565b6000819050919050565b61085a81610847565b82525050565b60006020820190506108756000830184610851565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108d2826108a7565b9050919050565b6108e2816108c7565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610922578082015181840152602081019050610907565b60008484015250505050565b6000610939826108e8565b61094381856108f3565b9350610953818560208601610904565b61095c816106c2565b840191505092915050565b61097081610847565b82525050565b600060608301600083015161098e60008601826108d9565b50602083015184820360208601526109a6828261092e565b91505060408301516109bb6040860182610967565b508091505092915050565b60006109d28383610976565b905092915050565b6000602082019050919050565b60006109f28261087b565b6109fc8185610886565b935083602082028501610a0e85610897565b8060005b85811015610a4a5784840389528151610a2b85826109c6565b9450610a36836109da565b925060208a01995050600181019050610a12565b50829750879550505050505092915050565b60006020820190508181036000830152610a7681846109e7565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ab882610847565b9150610ac383610847565b9250828201905080821115610adb57610ada610a7e565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610b2857607f821691505b602082108103610b3b57610b3a610ae1565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610ba37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610b66565b610bad8683610b66565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610bea610be5610be084610847565b610bc5565b610847565b9050919050565b6000819050919050565b610c0483610bcf565b610c18610c1082610bf1565b848454610b73565b825550505050565b600090565b610c2d610c20565b610c38818484610bfb565b505050565b5b81811015610c5c57610c51600082610c25565b600181019050610c3e565b5050565b601f821115610ca157610c7281610b41565b610c7b84610b56565b81016020851015610c8a578190505b610c9e610c9685610b56565b830182610c3d565b50505b505050565b600082821c905092915050565b6000610cc460001984600802610ca6565b1980831691505092915050565b6000610cdd8383610cb3565b9150826002028217905092915050565b610cf6826108e8565b67ffffffffffffffff811115610d0f57610d0e6106d3565b5b610d198254610b10565b610d24828285610c60565b600060209050601f831160018114610d575760008415610d45578287015190505b610d4f8582610cd1565b865550610db7565b601f198416610d6586610b41565b60005b82811015610d8d57848901518255600182019150602085019450602081019050610d68565b86831015610daa5784890151610da6601f891682610cb3565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b6000610ddb826108e8565b610de58185610dbf565b9350610df5818560208601610904565b610dfe816106c2565b840191505092915050565b6000604082019050610e1e6000830185610851565b8181036020830152610e308184610dd0565b90509392505050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e7472616374206861732e000000000000000000000000602082015250565b6000610e95603483610dbf565b9150610ea082610e39565b604082019050919050565b60006020820190508181036000830152610ec481610e88565b9050919050565b600081905092915050565b50565b6000610ee6600083610ecb565b9150610ef182610ed6565b600082019050919050565b6000610f0782610ed9565b9150819050919050565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b6000610f6d602783610dbf565b9150610f7882610f11565b604082019050919050565b60006020820190508181036000830152610f9c81610f60565b9050919050565b60006020820190508181036000830152610fbd8184610dd0565b905092915050565b610fce816108c7565b82525050565b60006060820190508181036000830152610fee8186610dd0565b9050610ffd6020830185610fc5565b818103604083015261100f8184610dd0565b9050949350505050565b600060408201905081810360008301526110338185610dd0565b90506110426020830184610851565b939250505056fea26469706673582212201dd3de8bd6133867a1f14cf6cb4c8eb395a044cc8969a23f682532a43c14c8c264736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

