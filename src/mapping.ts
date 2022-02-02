import { PersonhoodPassport, Transfer} from "../generated/PersonhoodPassport/PersonhoodPassport"
import { Passport } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let entity = Passport.load(event.params.to.toHexString());
  if (!entity) {
    entity = new Passport(event.params.to.toHexString());
    let PoPPContract = PersonhoodPassport.bind(event.address);
    entity.tokenURI = PoPPContract.tokenURI(event.params.tokenId);
    entity.save()
  }
}
