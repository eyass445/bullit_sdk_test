const { bullitSDK } = require('sdkbullit');

// Your code using bullitSDK
// const useStorage = require('./usePinata');
// Replace with your actual Pinata API Key and Secret API Key
const apiKey = 'fa0f53e46fdc7aca725c';
const secretApiKey = 'e07619b555564a8db0d90ba729ef7fc8365ecf47d29d0c802432720c37b88fe5';
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1Nzg1M2YxYS00ZTkwLTRmZWEtYTNmNC0wNThiNjE4NTkyMGEiLCJlbWFpbCI6Iml5YXNzZXlhbW9mZmljYWxAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImZhMGY1M2U0NmZkYzdhY2E3MjVjIiwic2NvcGVkS2V5U2VjcmV0IjoiZTA3NjE5YjU1NTU2NGE4ZGIwZDkwYmE3MjllZjdmYzgzNjVlY2Y0N2QyOWQwYzgwMjQzMjcyMGMzN2I4OGZlNSIsImV4cCI6MTc1MzE4Mjg1MX0.6NlPDoK3Eg7OId_uadvKn_QycTyBdDSw1bFstmqeuO4'; // Replace with your actual JWT code
//https://bronze-solid-coral-631.mypinata.cloud	
// Ensure API keys are correctly set

const { uplodeFile, downloadFile } = bullitSDK({
    protocol: 'LIT',
    system: 'Pinata',
    token: 'your_web3_storage_token',
    chain: 'ethereum', // Example chain, replace with your actual chain
    accessControlConditions: {
    // Example access control conditions, replace with your actual conditions
    contractAddress: '0xYourContractAddress',
    functionName: 'canAccess',
    functionParams: ['userAddress'],
    functionAbi: [{
      "constant": true,
      "inputs": [{"name": "_address", "type": "address"}],
      "name": "canAccess",
      "outputs": [{"name": "", "type": "bool"}],
      "type": "function"
    }],
    returnValueTest: {
      comparator: '==',
      value: 'true'
    }
    },
    gatewayUrl: 'https://bronze-solid-coral-631.mypinata.cloud',
    apiKey: apiKey,
    secretApiKey: secretApiKey,
    JWT: JWT
});




// Create an instance of the Pinata storage
//const storage = useStorage(apiKey, secretApiKey , JWT);

(async () => {
  try {
    // Example: Setting a file to Pinata
    const filePath = "./eyas.txt"; // Ensure this file exists in the same directory
    const metadata = {
      name: "ffff",
      keyvalues: {
        customKey: "customValue",
        customKey2: "customValue2",
      },
    };

    uplodeFile(filePath,metadata);
    // const cid = await storage.setFile(filePath, metadata);
    // console.log("Content added with CID:", cid);

    // Example: Trying to get a file (Note: Pinata doesn't support this directly)
    // const files = await storage.getFile(cid);
    // console.log("Retrieved files:", files);
    
  } catch (error) {
    console.error("Error:", error);
  }
})();
// /////////////////////))))))))))))

// (async () => {
//     try {
//         // Example: Getting a file from Pinata
//         const hash = 'QmbuHRCoT9rGvFHwuybT9Gf9RL9nZZvP9rjqGsrp9ZQ2Sk';
//         const files = await storage.getFile(hash);
//         console.log('Retrieved file data:', files);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();