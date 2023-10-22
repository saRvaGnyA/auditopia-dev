import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  EtherTransferred,
  betNoBugsPoolEvent,
  betYesBugsPoolEvent,
  insertIntoAuditEvent,
  insertIntoIssueEvent,
  setAuditCompletedEvent,
  setIsIssueAcceptedEvent
} from "../generated/Database/Database"

export function createEtherTransferredEvent(
  auditId: BigInt,
  recipient: Address,
  amount: BigInt
): EtherTransferred {
  let etherTransferredEvent = changetype<EtherTransferred>(newMockEvent())

  etherTransferredEvent.parameters = new Array()

  etherTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "auditId",
      ethereum.Value.fromUnsignedBigInt(auditId)
    )
  )
  etherTransferredEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  etherTransferredEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return etherTransferredEvent
}

export function createbetNoBugsPoolEventEvent(
  auditId: BigInt,
  contributor: Address,
  contribution: BigInt,
  auditState: ethereum.Tuple
): betNoBugsPoolEvent {
  let betNoBugsPoolEventEvent = changetype<betNoBugsPoolEvent>(newMockEvent())

  betNoBugsPoolEventEvent.parameters = new Array()

  betNoBugsPoolEventEvent.parameters.push(
    new ethereum.EventParam(
      "auditId",
      ethereum.Value.fromUnsignedBigInt(auditId)
    )
  )
  betNoBugsPoolEventEvent.parameters.push(
    new ethereum.EventParam(
      "contributor",
      ethereum.Value.fromAddress(contributor)
    )
  )
  betNoBugsPoolEventEvent.parameters.push(
    new ethereum.EventParam(
      "contribution",
      ethereum.Value.fromUnsignedBigInt(contribution)
    )
  )
  betNoBugsPoolEventEvent.parameters.push(
    new ethereum.EventParam("auditState", ethereum.Value.fromTuple(auditState))
  )

  return betNoBugsPoolEventEvent
}

export function createbetYesBugsPoolEventEvent(
  auditId: BigInt,
  contributor: Address,
  contribution: BigInt,
  auditState: ethereum.Tuple
): betYesBugsPoolEvent {
  let betYesBugsPoolEventEvent = changetype<betYesBugsPoolEvent>(newMockEvent())

  betYesBugsPoolEventEvent.parameters = new Array()

  betYesBugsPoolEventEvent.parameters.push(
    new ethereum.EventParam(
      "auditId",
      ethereum.Value.fromUnsignedBigInt(auditId)
    )
  )
  betYesBugsPoolEventEvent.parameters.push(
    new ethereum.EventParam(
      "contributor",
      ethereum.Value.fromAddress(contributor)
    )
  )
  betYesBugsPoolEventEvent.parameters.push(
    new ethereum.EventParam(
      "contribution",
      ethereum.Value.fromUnsignedBigInt(contribution)
    )
  )
  betYesBugsPoolEventEvent.parameters.push(
    new ethereum.EventParam("auditState", ethereum.Value.fromTuple(auditState))
  )

  return betYesBugsPoolEventEvent
}

export function createinsertIntoAuditEventEvent(
  auditId: BigInt,
  ownerId: Address,
  createdAt: BigInt,
  contractCid: string,
  description: string,
  isComplete: boolean,
  isDistributed: boolean,
  yesBugs: BigInt,
  noBugs: BigInt,
  yesBugsPoolEth: BigInt,
  noBugsPoolEth: BigInt,
  bugExistsDecision: boolean
): insertIntoAuditEvent {
  let insertIntoAuditEventEvent = changetype<insertIntoAuditEvent>(
    newMockEvent()
  )

  insertIntoAuditEventEvent.parameters = new Array()

  insertIntoAuditEventEvent.parameters.push(
    new ethereum.EventParam(
      "auditId",
      ethereum.Value.fromUnsignedBigInt(auditId)
    )
  )
  insertIntoAuditEventEvent.parameters.push(
    new ethereum.EventParam("ownerId", ethereum.Value.fromAddress(ownerId))
  )
  insertIntoAuditEventEvent.parameters.push(
    new ethereum.EventParam(
      "createdAt",
      ethereum.Value.fromUnsignedBigInt(createdAt)
    )
  )
  insertIntoAuditEventEvent.parameters.push(
    new ethereum.EventParam(
      "contractCid",
      ethereum.Value.fromString(contractCid)
    )
  )
  insertIntoAuditEventEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  insertIntoAuditEventEvent.parameters.push(
    new ethereum.EventParam(
      "isComplete",
      ethereum.Value.fromBoolean(isComplete)
    )
  )
  insertIntoAuditEventEvent.parameters.push(
    new ethereum.EventParam(
      "isDistributed",
      ethereum.Value.fromBoolean(isDistributed)
    )
  )
  insertIntoAuditEventEvent.parameters.push(
    new ethereum.EventParam(
      "yesBugs",
      ethereum.Value.fromUnsignedBigInt(yesBugs)
    )
  )
  insertIntoAuditEventEvent.parameters.push(
    new ethereum.EventParam("noBugs", ethereum.Value.fromUnsignedBigInt(noBugs))
  )
  insertIntoAuditEventEvent.parameters.push(
    new ethereum.EventParam(
      "yesBugsPoolEth",
      ethereum.Value.fromUnsignedBigInt(yesBugsPoolEth)
    )
  )
  insertIntoAuditEventEvent.parameters.push(
    new ethereum.EventParam(
      "noBugsPoolEth",
      ethereum.Value.fromUnsignedBigInt(noBugsPoolEth)
    )
  )
  insertIntoAuditEventEvent.parameters.push(
    new ethereum.EventParam(
      "bugExistsDecision",
      ethereum.Value.fromBoolean(bugExistsDecision)
    )
  )

  return insertIntoAuditEventEvent
}

export function createinsertIntoIssueEventEvent(
  issueId: BigInt,
  auditId: BigInt,
  reportedBy: Address,
  isAccepted: boolean,
  isPending: boolean,
  description: string
): insertIntoIssueEvent {
  let insertIntoIssueEventEvent = changetype<insertIntoIssueEvent>(
    newMockEvent()
  )

  insertIntoIssueEventEvent.parameters = new Array()

  insertIntoIssueEventEvent.parameters.push(
    new ethereum.EventParam(
      "issueId",
      ethereum.Value.fromUnsignedBigInt(issueId)
    )
  )
  insertIntoIssueEventEvent.parameters.push(
    new ethereum.EventParam(
      "auditId",
      ethereum.Value.fromUnsignedBigInt(auditId)
    )
  )
  insertIntoIssueEventEvent.parameters.push(
    new ethereum.EventParam(
      "reportedBy",
      ethereum.Value.fromAddress(reportedBy)
    )
  )
  insertIntoIssueEventEvent.parameters.push(
    new ethereum.EventParam(
      "isAccepted",
      ethereum.Value.fromBoolean(isAccepted)
    )
  )
  insertIntoIssueEventEvent.parameters.push(
    new ethereum.EventParam("isPending", ethereum.Value.fromBoolean(isPending))
  )
  insertIntoIssueEventEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return insertIntoIssueEventEvent
}

export function createsetAuditCompletedEventEvent(
  auditId: BigInt,
  bugExistsDecision: boolean,
  auditState: ethereum.Tuple
): setAuditCompletedEvent {
  let setAuditCompletedEventEvent = changetype<setAuditCompletedEvent>(
    newMockEvent()
  )

  setAuditCompletedEventEvent.parameters = new Array()

  setAuditCompletedEventEvent.parameters.push(
    new ethereum.EventParam(
      "auditId",
      ethereum.Value.fromUnsignedBigInt(auditId)
    )
  )
  setAuditCompletedEventEvent.parameters.push(
    new ethereum.EventParam(
      "bugExistsDecision",
      ethereum.Value.fromBoolean(bugExistsDecision)
    )
  )
  setAuditCompletedEventEvent.parameters.push(
    new ethereum.EventParam("auditState", ethereum.Value.fromTuple(auditState))
  )

  return setAuditCompletedEventEvent
}

export function createsetIsIssueAcceptedEventEvent(
  issueId: BigInt,
  isIssueAccepted: boolean,
  issueState: ethereum.Tuple
): setIsIssueAcceptedEvent {
  let setIsIssueAcceptedEventEvent = changetype<setIsIssueAcceptedEvent>(
    newMockEvent()
  )

  setIsIssueAcceptedEventEvent.parameters = new Array()

  setIsIssueAcceptedEventEvent.parameters.push(
    new ethereum.EventParam(
      "issueId",
      ethereum.Value.fromUnsignedBigInt(issueId)
    )
  )
  setIsIssueAcceptedEventEvent.parameters.push(
    new ethereum.EventParam(
      "isIssueAccepted",
      ethereum.Value.fromBoolean(isIssueAccepted)
    )
  )
  setIsIssueAcceptedEventEvent.parameters.push(
    new ethereum.EventParam("issueState", ethereum.Value.fromTuple(issueState))
  )

  return setIsIssueAcceptedEventEvent
}
