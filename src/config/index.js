const sdk = require('node-appwrite');

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
  .setEndpoint('http://localhost/v1') // Your API Endpoint
  .setProject('617783570921f') // Your project ID
  .setKey('4d74615f709bb9825572986d95f24d01d4ff8f9a7948dfe89ab77cfa86e12130aa03702eede03514c63eaf6614bbdba7f0c25a22a58c17cbfe8c1de2aa4a4bddd5beeb725510da8a0c386e494d6f3b60fe1adbf327ffa0fd1ba0b407027a84d377c478ee4dfc32d61853551ccd83f53aa26d550ccba62f13bfd62cc2b1ced8aa'); // Your API Key

export {
  health,
  client,
}
