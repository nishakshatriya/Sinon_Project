const chai = require("chai");
const expect = chai.expect;

const sinon = require("sinon");
const Controller = require("../app/controllers/note.controller");
const service = require("../app/servers/note.servers");

let req = {
    body: {
      title: "toyato",
      content: "camry"
    }
  },
  error = new Error({
    error: "blah blah"
  }),
  res = {},
  expectedResult;
describe("create", function() {
  beforeEach(function() {
    res = {
      json: sinon.spy(),
      status: sinon.stub().returns({
        send: sinon.spy()
      }) // to spy res.status(500).end()
    };
  });

  afterEach(function() {
    service.create.restore();
  });
  it("should return created vehicle obj", function() {
    expectedResult = req.body;
    sinon.stub(service, "create").yields(null, expectedResult);
    Controller.create(req, res);
    sinon.assert.calledWith(service.create, req.body);
    sinon.assert.calledWith(res.json,sinon.match({model: req.body.model}));
    sinon.assert.calledWith(res.json,sinon.match({manufacturer: req.body.manufacturer}));
  });

  it("should return status 500 on server error", function() {
    sinon.stub(service, "create").yields(error);
    Controller.create(req, res);
    sinon.assert.calledWith(service.create, req.body);
    sinon.assert.calledWith(res.status, 500);
    sinon.assert.calledOnce(res.status(500).send);
  });
});
