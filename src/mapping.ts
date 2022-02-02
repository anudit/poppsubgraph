import {
  PersonhoodPassport,
  Transfer
} from "../generated/PersonhoodPassport/PersonhoodPassport"
import { Passports } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let entity = Passports.load(event.transaction.from.toHex());
  if (!entity) {
    entity = new Passports(event.transaction.from.toHex())
    let PoPPContract = PersonhoodPassport.bind(event.address)
    entity.tokenURI = PoPPContract.tokenURI(event.params.tokenId);
    entity.save()
  }
}
