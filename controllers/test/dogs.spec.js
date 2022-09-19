import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../server.js";
const expect = chai.expect;

chai.use(chaiHttp);

const mockBreed = "akita";
const noAvailableBreed = "abcd";
const homePageText = "Lots of dogs";
const htmlPictureContent = ["image", ".jpg"];

after(() => {
  server.close();
  console.log("Server closed");
});

describe("Route /", () => {
  it("Should get home", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.not.be.null;
        expect(res.text).to.include(homePageText);
        done();
      });
  });
});

describe("Route /breedslist", () => {
  it("Should get list of all breeds ", (done) => {
    chai
      .request(server)
      .get("/breedslist")
      .set("content-type", "application/json")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.not.be.null;
      });
    done();
  });
});

describe("Route /pictures", () => {
  it("Should return pictures for certain breed", async (done) => {
    chai
      .request(server)
      .get(`/pictures?breed=${mockBreed}`)
      .set("content-type", "application/json")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.not.be.null;
        expect(res.text).to.include(htmlPictureContent[0]);
        expect(res.text).to.include(mockBreed);
        expect(res.text).to.include(htmlPictureContent[1]);
      });
    done();
  });
});

describe("Fetch Dog API", () => {
  it("Should fetch list of the dog breeds", async () => {
    await fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        expect(res).to.have.property("message");
        expect(res.message).to.be.an("object");
        expect(res).to.have.property("status");
        expect(res.status).equal("success");
      });
  });

  it("Should fetch Akita dog breed picture urls", async () => {
    await fetch(`https://dog.ceo/api/breed/${mockBreed}/images`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        expect(res).to.have.property("message");
        expect(res.message).to.be.an("array");
        expect(res).to.have.property("status");
        expect(res.status).equal("success");
      });
  });

  it("Should return error if breed is not found", async () => {
    await fetch(`https://dog.ceo/api/breed/${noAvailableBreed}/images`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        expect(res.status).equal("error");
        expect(res.code).equal(404);
        expect(res.message).equal(
          "Breed not found (master breed does not exist)"
        );
      });
  });
});
