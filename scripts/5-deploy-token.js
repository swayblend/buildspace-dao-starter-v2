import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenAddress = await sdk.deployer.deployToken({
      // What's your token's name?
      name: "JamBand DAO Governance Token",
      // What's your token's symbol?
      symbol: "JAMBAND",
      // This will be incase we want to sell our token,
      // but because we don't, we set it to AddressZero again.
      primary_sale_recipient: AddressZero, 
    });
    console.log(
      "Successfully deployed token module, address:",
      tokenAddress,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
}) ();

