export const tokenOwnershipDataSample = {
  data: {
    getOwnershipSignedData: {
      data: {
        address: '0x0C3b29321611736341609022C23E981AC56E7f96',
        chainId: 43114,
        createdAt: '2023-02-27T20:42:38.119Z',
        balance: 20,
      },
      signature: {
        r: '6233809984205254796758098316533952239306484698249609079787166463864066440127',
        s: '14010349285355278377570945621917500591422315839167474282914666808692465540309',
      },
      publicKey: 'B62qqRNpzrmgdzte55XNWQz2Yj9vtXdib1QSYJzNab6Tc8mcxESHMZ7',
    },
  },
};

export const proofOfTradeDataSample = {
  data: {
    getTradingSignedData: {
      data: {
        swapCounts: 4,
        amountUsd: 11878,
        exchange: 'UNI',
        createdAt: '2023-02-27T20:52:57.655Z',
      },
      signature: {
        r: '1571671039832384255617849029559137502785479834299231075484616085039780846343',
        s: '14372077181412218295481737196629884442500225021313554852751473309481109171326',
      },
      publicKey: 'B62qqRNpzrmgdzte55XNWQz2Yj9vtXdib1QSYJzNab6Tc8mcxESHMZ7',
    },
  },
};
//TODO remove address from data returned
