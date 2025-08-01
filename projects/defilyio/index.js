const ADDRESSES = require('../helper/coreAssets.json')
const { staking } = require("../helper/staking");

const stakingContract_BSC = "0x75A2145510b7CeefB812d5Afa1b20f94eC0BAf57";
const stakingContract_KARDIA = "0x0245a1f57Ee84b55Cf489Eb5F3d27355014e57f8";
const stakingContract_Harmony = "0x3b441bf2522927BCf41c1c24786E7a8E9a56B234";

const DFL = "0xD675fF2B0ff139E14F86D87b7a6049ca7C66d76e";
const DFL_Harmony = ADDRESSES.arbitrum.MIM;

module.exports = {
  bsc: {
    tvl: () => ({}),
    staking: staking(stakingContract_BSC, DFL),
  },
  kardia: {
    staking: staking(stakingContract_KARDIA, DFL),
  },
  harmony: {
    staking: staking(stakingContract_Harmony, DFL_Harmony),
  },
  deadFrom: '2024-10-01',
};
