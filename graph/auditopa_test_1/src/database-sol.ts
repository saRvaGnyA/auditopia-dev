import { EtherTransferred as EtherTransferredEvent } from "../generated/Database.sol/Database.sol"
import { EtherTransferred } from "../generated/schema"

export function handleEtherTransferred(event: EtherTransferredEvent): void {
  let entity = new EtherTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
