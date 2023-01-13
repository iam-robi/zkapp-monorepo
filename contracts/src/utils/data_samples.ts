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
  data: {
    getTradingSignedData: {
      data: {
        swapCounts: 4,
        amountUsd: 11878,
        exchange: 'UNI',
      },
      signature: {
        r: '3027363732111562368082797793133606645791599509446774769918804689575585042676',
        s: '23212990216868312744785700201366713009544431278283641012924721324521997270674',
      },
      publicKey: 'B62qqFGos8L5WD45YSAyaF5dkQagnrnUdY54F2rGXU5gcjKnHq84CkS',
    },
  },
};
//TODO remove address from data returned
