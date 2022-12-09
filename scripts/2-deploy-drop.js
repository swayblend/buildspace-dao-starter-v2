import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      // The collection's name.
      name: "JamBand DAO Membership",
      // A description for the collection.
      description: "An example of a DAO for bands and fans",
      // The image that will be held on our NFT.
      image: readFileSync("scripts/assets/jamband.png"),
      // We need to pass in the address of the person who will be receiving the 
      // proceeds from sales of NFT's in the contract

      // We're planning on not charging people for the drop, so we'll pass in the
      // 0x0 address. You can set this to your own wallet address if you want to
      // charge for the drop.
      primary_sale_recipient: AddressZero,
    });

    // This initialization returns the address of our contract.
    // We use this to initialize the contract on the thridweb sdk.
    const editionDrop = sdk.getEditionDrop(editionDropAddress);

    // With this we can get the metadata of our contract.
    const metadata = await editionDrop.metadata.get();

    console.log(
      "Successfully deployed editionDrop contract, address:",
      editionDropAddress,
    );
    console.log("editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
}) ();


