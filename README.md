# poppsubgraph
A subgraph for Proof of Personhood Passport

Build completed: QmabK7Bkhc2fhWzjk8L7A7VxST1C2mbwF3fJyqDTp5ZarK

Deployed to https://thegraph.com/studio/subgraph/popp

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/1649/popp/v1.0

Example,
```graphql
{
  passports(where: {id: "0x6bf1eba9740441d0a8822eda4e116a74f850d81b"}) {
    id
    tokenURI
  }
}
```
