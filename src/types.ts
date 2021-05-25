
// When Requesting for a quote
export interface QuoteRequestPayload {
  route: any,
  schedule: any
}

// Return Values from client 
export interface Quote {
  quoteId: string
  service: string
  price: number
}

export interface QuotesReturnPayload {
  quotes: Quote[]
}

// Credentials
export interface Credentials {
  apiKey?: string
  clientId?: string
  clientSecret?: string
  token?: string
}
