# poppsubgraph
A subgraph for Proof of Personhood Passport

Http Queries Endpoint:
- https://api.thegraph.com/subgraphs/id/QmewtAtJJsTDAeT8apSXtK3mi4PaHFqMwz1JjqinrVozPg
-  https://api.thegraph.com/subgraphs/name/anudit/popp

Deployed to https://thegraph.com/explorer/subgraph/anudit/popp

Example,
```graphql
{
  passports(where: {id: "0x6bf1eba9740441d0a8822eda4e116a74f850d81b"}) {
    id
    tokenURI
  }
}
```
