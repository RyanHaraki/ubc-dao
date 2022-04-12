import sdk from "./1-initialize-sdk.js";

// Grab the app module address.
const appModule = sdk.getAppModule(
  "0x17C3B1F465cc103d616bE79f68899513CECb9C9c"
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "UBC DAO's Proposals",

      // This is the location of our governance token, our ERC-20 contract!
      votingTokenAddress: "0x30c1309FAE4D0480c22329Bd35cDDbc691Cb7D04",

      // After a proposal is created, when can members start voting?
      proposalStartWaitTimeInSeconds: 0,

      // How long do members have to vote on a proposal when it's created?
      // Here, we set it to 24 hours (86400 seconds)
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      votingQuorumFraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?

      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();
