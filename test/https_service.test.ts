import { expect } from "chai"
import nock from "nock"
import { HttpService } from "../src/http_service"
import { QuotesReturnPayload } from "../src/types"

const exampleReturnPayloadFromFleet: QuotesReturnPayload =  [
  {
    quoteId: "123",
    service: "car",
    price: 10.34
  },
  {
    quoteId: "456",
    service: "bike",
    price: 6.32
  }
]

describe("Http External Fleet Service", () => {
  
  // Example test
  it("Should get a random number.", async () => {
    nock("http://random-number.com").post("/number").reply(200, "12.34")
    const httpService = new HttpService()

    const body = await httpService.getRandomNumber()
    
    expect(body).is.eql("12.34")
  })

  it.skip("Should request and return a quote.", async () => {
    // Write Code
    nock("http://random-number.com").post("/number").reply(200, "12.34")
  })
})
