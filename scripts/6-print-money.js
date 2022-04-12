import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const tokenModule = sdk.getTokenModule(
  "0x30c1309FAE4D0480c22329Bd35cDDbc691Cb7D04"
);

(async () => {
  try {
    // Max supply
    const amount = 1_000_000;
    // We use the util function from "ethers" to convert the amount
    // to have 18 decimals
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();

    console.log(
      "✅ There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$UBC in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
