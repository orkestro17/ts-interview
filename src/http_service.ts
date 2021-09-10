import got, { Headers } from "got"
import { Credentials, QuoteRequestPayload, QuotesReturnPayload } from "./types"


/*
Context

The HTTP service is attached to every fleet object, 
it allows us to easily request a quote from a specific fleet.

Task

Create a class and associated function(s) which:
- has / takes the correct parameters to create a http call to request a quote
- Returns correct quote (as quotes from fleet are provided as an array)
- handles errors correctly
- gives useful information back to the code which calls the http service

Extension
- Fleets will have their own authentication, however, different fleets 
  might have different credentials.
- Ensure that the class uses the correct credentials for each fleet during 
  the http call.

*/

export class HttpService {
  constructor() {}

  async requestQuote(service: string, payload: QuoteRequestPayload) {
    // Write Code here    
  }

  // Extension - Return correct header
  createAuthorizationHeader(credentials: Credentials): Headers {
    // Write code here
  }

  // Example http call
  async getRandomNumber(): Promise<any> {
    const headers = {}
    const json = {}

    // const resp = await got.post("http://random-number.com/number", { headers, json })
    // return resp.body

    return null
  }
}
