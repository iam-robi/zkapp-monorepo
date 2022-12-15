# Zk Dashboard
## Build your zero knowledge profile with Mina ZKapps

Zk Dashboard allow users, DAOs, to publish zero knowledge proofs about their activity under a public MINA Account, without revealing their blockchain wallets or other sensitive.

The very first version is available at https://app.beta.zkdashboard.com

The application is built on top of 3 building blocks inside a monorepo. Optimized to make the most of a full typescript stack as MINA allows to build smart contracts with typescript.

- **contracts** are the backbone of the application and built with snarky js. Each contract manages a specific proof and only accept data from specific certified oracles. Contracts emit events for valid proofs. Oracles are deployed on MINA berkeley testnets.
- **oracle** is the typescript server (nest js) deployed on a private kubernetes cluster using a specifically made helm chart. The oracl takes care of 2 tasks:
    -  certifying the data is requested from the owner of the EVM address.
    -  formatting the data in an open standard for multiple usages inside zkapps
       or
- **ui** is the interface of the zkapp built with nuxt3 deployed with vercel. the whole front end import and uses types from the smart contracts, the oracle, and the MINA public API.

## Features
Right now features are limited but showcase the possibilities of zkapps.
- Prove on MINA you own at least 1 NFT from the collection of your choice (Proof Of Ownership)
- Prove on MINA you traded for a volume > 10,000$ on UNISWAP without revealing your wallet address
- Private mode - proofs can be generated live in front of other users, without revealing the data

Many more features are planned for the zk dashboard to build qualitative zkprofiles with a modular approach.

## Limitations
Please note this a beta app with many limitations due to the novelty of the topic. The priority was given to provide a full stack application with concrete example in the limited timeline of zkignition program.
Some of limitations to notice are:
- Not optimized for large volume of queries. There are already tools available on MINA like [actions & reducers](https://docs.minaprotocol.com/zkapps/advanced-snarkyjs/actions-and-reducer) , API queries for events can be optimized. Many more optimization will come as well as the ecosystem matures.
- Many hardcoded variables for proofs. Right now for example zkdashboard only allows to prove over 10K$ of volume on Uniswap for proof of trade. Many more use cases will be supported in the long term, also by creating new data points.
- snarkyjs does not support M1 yet , attempt to generate proof on Mac M1 will likely freeze your computer ! 
- app is not tested on all browsers and conditions 

