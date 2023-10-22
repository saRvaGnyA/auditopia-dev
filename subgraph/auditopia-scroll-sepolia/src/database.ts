import {
  EtherTransferred as EtherTransferredEvent,
  betNoBugsPoolEvent as betNoBugsPoolEventEvent,
  betYesBugsPoolEvent as betYesBugsPoolEventEvent,
  insertIntoAuditEvent as insertIntoAuditEventEvent,
  insertIntoIssueEvent as insertIntoIssueEventEvent,
  setAuditCompletedEvent as setAuditCompletedEventEvent,
  setIsIssueAcceptedEvent as setIsIssueAcceptedEventEvent
} from "../generated/Database/Database"
import {
  EtherTransferred,
  betNoBugsPoolEvent,
  betYesBugsPoolEvent,
  insertIntoAuditEvent,
  insertIntoIssueEvent,
  setAuditCompletedEvent,
  setIsIssueAcceptedEvent
} from "../generated/schema"

export function handleEtherTransferred(event: EtherTransferredEvent): void {
  let entity = new EtherTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auditId = event.params.auditId
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlebetNoBugsPoolEvent(event: betNoBugsPoolEventEvent): void {
  let entity = new betNoBugsPoolEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auditId = event.params.auditId
  entity.contributor = event.params.contributor
  entity.contribution = event.params.contribution
  entity.auditState_auditId = event.params.auditState.auditId
  entity.auditState_ownerId = event.params.auditState.ownerId
  entity.auditState_createdAt = event.params.auditState.createdAt
  entity.auditState_contractCid = event.params.auditState.contractCid
  entity.auditState_description = event.params.auditState.description
  entity.auditState_isComplete = event.params.auditState.isComplete
  entity.auditState_isDistributed = event.params.auditState.isDistributed
  entity.auditState_yesBugs = event.params.auditState.yesBugs
  entity.auditState_noBugs = event.params.auditState.noBugs
  entity.auditState_yesBugsPoolEth = event.params.auditState.yesBugsPoolEth
  entity.auditState_noBugsPoolEth = event.params.auditState.noBugsPoolEth
  entity.auditState_bugExistsDecision =
    event.params.auditState.bugExistsDecision

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlebetYesBugsPoolEvent(
  event: betYesBugsPoolEventEvent
): void {
  let entity = new betYesBugsPoolEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auditId = event.params.auditId
  entity.contributor = event.params.contributor
  entity.contribution = event.params.contribution
  entity.auditState_auditId = event.params.auditState.auditId
  entity.auditState_ownerId = event.params.auditState.ownerId
  entity.auditState_createdAt = event.params.auditState.createdAt
  entity.auditState_contractCid = event.params.auditState.contractCid
  entity.auditState_description = event.params.auditState.description
  entity.auditState_isComplete = event.params.auditState.isComplete
  entity.auditState_isDistributed = event.params.auditState.isDistributed
  entity.auditState_yesBugs = event.params.auditState.yesBugs
  entity.auditState_noBugs = event.params.auditState.noBugs
  entity.auditState_yesBugsPoolEth = event.params.auditState.yesBugsPoolEth
  entity.auditState_noBugsPoolEth = event.params.auditState.noBugsPoolEth
  entity.auditState_bugExistsDecision =
    event.params.auditState.bugExistsDecision

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleinsertIntoAuditEvent(
  event: insertIntoAuditEventEvent
): void {
  let entity = new insertIntoAuditEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auditId = event.params.auditId
  entity.ownerId = event.params.ownerId
  entity.createdAt = event.params.createdAt
  entity.contractCid = event.params.contractCid
  entity.description = event.params.description
  entity.isComplete = event.params.isComplete
  entity.isDistributed = event.params.isDistributed
  entity.yesBugs = event.params.yesBugs
  entity.noBugs = event.params.noBugs
  entity.yesBugsPoolEth = event.params.yesBugsPoolEth
  entity.noBugsPoolEth = event.params.noBugsPoolEth
  entity.bugExistsDecision = event.params.bugExistsDecision

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleinsertIntoIssueEvent(
  event: insertIntoIssueEventEvent
): void {
  let entity = new insertIntoIssueEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.issueId = event.params.issueId
  entity.auditId = event.params.auditId
  entity.reportedBy = event.params.reportedBy
  entity.isAccepted = event.params.isAccepted
  entity.isPending = event.params.isPending
  entity.description = event.params.description

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlesetAuditCompletedEvent(
  event: setAuditCompletedEventEvent
): void {
  let entity = new setAuditCompletedEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auditId = event.params.auditId
  entity.bugExistsDecision = event.params.bugExistsDecision
  entity.auditState_auditId = event.params.auditState.auditId
  entity.auditState_ownerId = event.params.auditState.ownerId
  entity.auditState_createdAt = event.params.auditState.createdAt
  entity.auditState_contractCid = event.params.auditState.contractCid
  entity.auditState_description = event.params.auditState.description
  entity.auditState_isComplete = event.params.auditState.isComplete
  entity.auditState_isDistributed = event.params.auditState.isDistributed
  entity.auditState_yesBugs = event.params.auditState.yesBugs
  entity.auditState_noBugs = event.params.auditState.noBugs
  entity.auditState_yesBugsPoolEth = event.params.auditState.yesBugsPoolEth
  entity.auditState_noBugsPoolEth = event.params.auditState.noBugsPoolEth
  entity.auditState_bugExistsDecision =
    event.params.auditState.bugExistsDecision

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlesetIsIssueAcceptedEvent(
  event: setIsIssueAcceptedEventEvent
): void {
  let entity = new setIsIssueAcceptedEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.issueId = event.params.issueId
  entity.isIssueAccepted = event.params.isIssueAccepted
  entity.issueState_issueId = event.params.issueState.issueId
  entity.issueState_auditId = event.params.issueState.auditId
  entity.issueState_reportedBy = event.params.issueState.reportedBy
  entity.issueState_isAccepted = event.params.issueState.isAccepted
  entity.issueState_isPending = event.params.issueState.isPending
  entity.issueState_description = event.params.issueState.description

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
