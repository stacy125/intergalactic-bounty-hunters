const { db } = require('./models/Bounty.js');
const Bounty = require('./models/Bounty.js');
/*
 * Instructions:
 *
 * For each prompt below, write a query that completes the task described in
 * the prompt.
 *
 * Tip: comment out your answers before moving on to the next prompt.
 *
 */

// Create a new Bounty with the following values:
// - name: Han Solo,
// - wanted for:  Owing Money
// - client: Jabba the Hut
// - reward: 10000000
// - ship: Millennium Falcon
// - hunters: Bobba Fett, Dengar, IG-88, Zuckus, Greedo, Bossk, 4-Lom
// - captured: false
Bounty.create({
    name: "Han Solo",
    ['wanter for']: "owing money",
    client: "Jabba the Hut",
    reward: 10000000,
    ship: 'Millennium Falcon',
    hunters: ['Bobba Fett', 'Dengar', 'IG-88', 'Zuckus', 'Greedo', 'Bossk', '4-Lom'],
    capture: 'false'

})
// .then(Bounty => {
//   // console.log(Bounty);
// });

// Find all bounties in the database
Bounty.find({}).then((bounties) => {
  console.log(bounties);
})
// Find all bounties where the client is 'Time Bureau'
Bounty.find({client: "Time Bureau"}).then((bounties) => {
  console.log(bounties);
})
// Find all bounties that have been captured
Bounty.find({ capture: "true" }).then((bounties) => {
  console.log(bounties);
})
// // Find all bounties with a reward greater than 100,000
Bounty.find({ reward: { $gt: 100000 } }).then((bounties) => {
  console.log(bounties);
})
// // Starbuck and the Captain have come to an understanding. Remove her record.
Bounty.remove({ name: "Starbuck" }).then((bounties) => {
  console.log(bounties);
})
// // Update Sara Lance's name to be her super hero alias, 'White Canary'
Bounty.update({ name: "Sara Lance" }, { $set: { name: "White Canary" } }).then((bounties) => {
  console.log(bounties);
})
// // Update Rocket's ship to be 'The Milano 2'
Bounty.update({ name: "Rocket" }, { $set: { ship: "The Milano 2" } }).then((bounties) => {
  console.log(bounties);
})

