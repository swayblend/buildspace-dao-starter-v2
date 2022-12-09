import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xB1497E8770832EcDd6C2887d6abE8cB75Df4366A");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Beamed Pair of Eighth Notes",
        description: "This NFT will give you access to JamBand DAO",
        image: readFileSync("scripts/assets/jamband.png"),
      },
    ]);
    console.log("Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("Failed to create the new NFT", error);
  }
}) ();

