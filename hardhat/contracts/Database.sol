// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Database {
    struct audit {
        uint256 auditId;
        address ownerId;
        uint256 createdAt;
        string contractCid;
        string description;
        bool isComplete;
        //Betting related features
        uint256 yesBugs;
        uint256 noBugs;
        uint256 yesBugsPoolEth;
        uint256 noBugsPoolEth;
    }
    struct issue {
        uint256 issueId;
        uint256 auditId;
        address reportedBy;
        bool isAccepted;
        bool isPending;
        string description;
    }
    struct contribution {
        address contributor;
        uint256 etherContributed;
    }

    mapping(address => uint256[]) ownerToAuditId;
    mapping(address => uint256[]) ownerToIssueId;
    mapping(uint256 => mapping(address => int256)) votes;
    mapping(uint256 => contribution[]) yesBugsVoters;
    mapping(uint256 => contribution[]) noBugsVoters;

    uint256 currentAuditId = 0;
    uint256 currentIssueId = 0;

    audit[] auditsArray;
    issue[] issuesArray;

    modifier auditIdShouldExist(uint256 auditId) {
        require(auditId >= 0, "Invalid audit Id passed to the function.");
        require(
            auditId < currentAuditId,
            "Invalid audit Id passed to the function."
        );
        _;
    }
    modifier issueIdShouldExist(uint256 issueId) {
        require(issueId >= 0, "Invalid audit Id passed to the function.");
        require(
            issueId < currentIssueId,
            "Invalid audit Id passed to the function."
        );
        _;
    }

    // Function for inserting new entry into the audit table.
    function insertIntoAudit(
        address ownerId,
        string memory contractCid,
        string memory description
    ) public payable {
        audit memory entry = audit(
            currentAuditId,
            ownerId,
            block.timestamp,
            contractCid,
            description,
            false,
            0,
            0,
            0,
            0
        );
        auditsArray.push(entry);
        ownerToAuditId[ownerId].push(currentAuditId);
        currentAuditId += 1;
    }

    // Function to add new entry into the issues table.
    function insertIntoIssue(
        uint256 auditId,
        address reportedBy,
        string memory description
    ) public payable {
        require(auditId >= 0, "Invalid audit Id passed to the function.");
        require(
            auditId < currentAuditId,
            "Invalid audit Id passed to the function."
        );
        issue memory entry = issue(
            currentIssueId,
            auditId,
            reportedBy,
            false,
            true,
            description
        );
        issuesArray.push(entry);
        ownerToIssueId[reportedBy].push(currentIssueId);
        currentIssueId += 1;
    }

    // Function for setting the audit state as completed.
    function setAuditCompleted(
        bool isAuditCompleted,
        uint256 auditId
    ) public auditIdShouldExist(auditId) returns (bool) {
        auditsArray[auditId].isComplete = isAuditCompleted;
        return auditsArray[auditId].isComplete;
    }

    // Function for setting the issue state as accepted or not.
    function setIssueAccepted(
        bool isIssueAccepted,
        uint256 issueId
    ) public issueIdShouldExist(issueId) returns (bool) {
        issuesArray[issueId].isAccepted = isIssueAccepted;
        issuesArray[issueId].isPending = false;
        return issuesArray[issueId].isAccepted;
    }

    function getAuditsIdsForAddress(
        address ownerAddress
    ) public view returns (uint256[] memory) {
        return ownerToAuditId[ownerAddress];
    }

    function getIssueIdsForAddress(
        address ownerAddress
    ) public view returns (uint256[] memory) {
        return ownerToIssueId[ownerAddress];
    }

    function getAudit(
        uint256 auditId
    ) public view auditIdShouldExist(auditId) returns (audit memory) {
        return auditsArray[auditId];
    }

    function getIssue(
        uint256 issueId
    ) public view issueIdShouldExist(issueId) returns (issue memory) {
        return issuesArray[issueId];
    }

    // Betting Functions

    function betYesBugsPool(
        uint256 auditId
    ) public payable auditIdShouldExist(auditId) {
        auditsArray[auditId].yesBugs += 1;
        auditsArray[auditId].yesBugsPoolEth += msg.value;
        votes[auditId][msg.sender] = 1;
        contribution memory con = contribution(msg.sender, msg.value);
        yesBugsVoters[auditId].push(con);
    }

    function betNoBugsPool(
        uint256 auditId
    ) public payable auditIdShouldExist(auditId) {
        auditsArray[auditId].noBugs += 1;
        auditsArray[auditId].noBugsPoolEth += msg.value;
        votes[auditId][msg.sender] = -1;
        contribution memory con = contribution(msg.sender, msg.value);
        noBugsVoters[auditId].push(con);
    }

    function getListOfYesBugsVoters(
        uint256 auditId
    ) public view auditIdShouldExist(auditId) returns (contribution[] memory) {
        return yesBugsVoters[auditId];
    }

    function getListOfNoBugsVoters(
        uint256 auditId
    ) public view auditIdShouldExist(auditId) returns (contribution[] memory) {
        return noBugsVoters[auditId];
    }

    function hasVoted(
        uint256 auditId,
        address voter
    ) public view auditIdShouldExist(auditId) returns (bool) {
        return votes[auditId][voter] != 0;
    }

    function distribution() public {}
}
