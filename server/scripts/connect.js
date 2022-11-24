const { SSX } = require("@spruceid/ssx")
const  { ethers } =  require("ethers");

const provider = new ethers.providers.JsonRpcProvider();
//
// const signIn = async () => {
//     const ssx = new SSX({
//         enableDaoLogin: true,
//         resolveEns: true,
//         providers: {
//             web3: {  },
//             server: { host: "http://localhost:3008" },
//         },
//     });
//     await ssx.signIn();
//     const userAddress = ssx.address();
//     const session = ssx.session;
// };