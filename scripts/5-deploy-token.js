import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x17C3B1F465cc103d616bE79f68899513CECb9C9c");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      name: "UBC DAO Governance Token",
      symbol: "UBC",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
