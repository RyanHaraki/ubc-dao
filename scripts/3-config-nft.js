import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x68e35A7B5bF415e4F71EB7714D0a56442D2d1Cbf",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "UBC DAO Founding Membership Pass",
        description: "This NFT will grant you access to UBC DAO as a founding member.",
        image: readFileSync("scripts/assets/card.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();