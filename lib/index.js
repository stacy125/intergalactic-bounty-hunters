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

}).then(Bounty => {
  console.log(Bounty);
});

// Find all bounties in the database
db.bounties.find()
// Find all bounties where the client is 'Time Bureau'
db.bounties.find({client: "Time Bureau"})
// Find all bounties that have been captured
db.bounties.find({ capture: "true" })
// Find all bounties with a reward greater than 100,000
db.bounties.find({ reward: {$gt: 100000} })
// Starbuck and the Captain have come to an understanding. Remove her record.
db.bounties.remove({name: "Starbuck"})
// Update Sara Lance's name to be her super hero alias, 'White Canary'
db.bounties.update({name: "Sara Lance"}, {$set: {name: "White Canary"}})
// Update Rocket's ship to be 'The Milano 2'
db.bounties.update({ name: "Rocket" }, { $set: { ship: "The Milano 2" } })

