export const tokenOwnershipDataSample = {
  "data": {
      "getOwnershipSignedData": {
          "data": {
              "address": "0x0C3b29321611736341609022C23E981AC56E7f96",
              "chainId": 43114,
              "createdAt": "2023-01-13T16:37:14.238Z",
              "balance": 20
          },
          "signature": {
              "r": "26244985826662392599670240713055439289348944815046418280458632455045122415266",
              "s": "24166970144382140173435643935705378693208064683177577979698252097145567878628"
          },
          "publicKey": "B62qqRNpzrmgdzte55XNWQz2Yj9vtXdib1QSYJzNab6Tc8mcxESHMZ7"
      }
  }
};

export const proofOfTradeDataSample = {
  "data": {
      "getTradingSignedData": {
          "data": {
              "swapCounts": 4,
              "amountUsd": 11878,
              "exchange": "UNI",
              "createdAt": "2023-01-13T16:42:45.808Z"
          },
          "signature": {
              "r": "7810889766551090898632468065844233965340020606266228206962706729740479847253",
              "s": "14366920768108845609481583729276053957031459300018972599919014122944388941933"
          },
          "publicKey": "B62qqRNpzrmgdzte55XNWQz2Yj9vtXdib1QSYJzNab6Tc8mcxESHMZ7"
      }
  }
};
//TODO remove address from data returned
