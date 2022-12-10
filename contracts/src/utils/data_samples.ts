export const tokenOwnershipDataSample = {
  data: {
    getOwnershipSignedData: {
      data: {
        address: '0x0C3b29321611736341609022C23E981AC56E7f96',
        chainId: 43114,
        createdAt: '2022-11-28T09:30:08.226Z',
        balance: 20,
      },
      signature: {
        r: '20602730057308047063052483389166938333466728007610673901102282888577720421520',
        s: '4386131374594108274228104479871987355783710889454917710865910307160901634535',
      },
      publicKey: 'B62qqFGos8L5WD45YSAyaF5dkQagnrnUdY54F2rGXU5gcjKnHq84CkS',
    },
  },
};

export const proofOfTradeDataSample = {
  data: {
    getTradingSignedData: {
      data: {
        swapCounts: 4,
        amountUsd: 11878,
        dex: 'UNI',
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
