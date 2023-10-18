import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { EtherTransferred } from "../generated/Contract/Contract"

export function createEtherTransferredEvent(
  recipient: Address,
  amount: BigInt
): EtherTransferred {
  let etherTransferredEvent = changetype<EtherTransferred>(newMockEvent())

  etherTransferredEvent.parameters = new Array()

  etherTransferredEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  etherTransferredEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return etherTransferredEvent
}
