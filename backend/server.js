var express = require('express');
var cors = require('cors');
var uuid = require('uuid');
var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.json());

var bountyList = [{
  name: "Jabba the hutt",
  living: true,
  type: "sith",
  amount: 5000,
  id: uuid.v4(),
}, {
  name: "Edward",
  living: false,
  type: "sith",
  amount: 50000,
  id: uuid.v4(),
}, {
  name: "Wicked Witch of the West",
  living: true,
  type: "sith",
  amount: 1000,
  id: uuid.v4(),
}];

app.get("/bounties", function (req, res) {
  res.send(bountyList);
});


app.get("/bounties/:id", function (req, res) {
  var singleBounty;
  bountyList.forEach(function (bounty, index) {
    if (bounty.id === req.params.id) {
      singleBounty = bountyList[index];
    };
  });
  res.send(singleBounty);
});

app.post("/bounties", function (req, res) {
  console.log(req.body);
  var newBounty = req.body;
  newBounty.id = uuid.v4();
  bountyList.push(newBounty);
  res.send(newBounty);
});

app.put("/bounties/:id", function (req, res) {
  var updatedBounty = req.body;

  bountyList.forEach(function (bounty, index) {
    if (bounty.id === req.params.id) {
      bountyList[index] = updatedBounty;
      res.send(updatedBounty);
    };
  });
});

app.delete("/bounties/:id", function (req, res) {
  var deletedBounty;
  bountyList.forEach(function (bounty, index) {
    if (bounty.id === req.params.id) {
      deletedBounty = bountyList[index];
      bountyList.splice(index, 1);
    };
  });
  res.send(deletedBounty);
});

app.listen(8000, function () {
  console.log("You got served on port 8000");
});