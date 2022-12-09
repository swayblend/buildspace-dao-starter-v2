import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0x8BaB585E4CbA3ef075765D46096A96FB3210A542");

(async () => {
  try {
    // Max supply.
    const amount = 1_000_000;
    // Interact with my deployed ERC-20 contract and mint the tokens!
    await token.mintToSelf(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now.
    console.log("There now is", totalSupply.displayValue, "$JAMBAND in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
}) ();