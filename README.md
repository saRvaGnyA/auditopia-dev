<h1 align="center">
  <a href="https://github.com/saRvaGnyA/auditopia">
  </a>
  <br>
  Auditopia
</h1>
 
<div align="center">
   <strong>Auditopia</strong> - A Decentralized Smart Contract Audit Platform<br>
  This project is still <strong>WIP</strong>
</div>

<hr>

<details>
<summary>Table of Contents</summary>

- [Description](#description)
- [Links](#links)
- [Tech Stack](#tech-stack)
- [Team Members](#team-members)

</details>

## 📝Description

<table>
  <tr>
    <td>
      Auditing wait times in top audit firms are 9-12 months and expensive. We need something that is more participative and allows new and yet-unproven security auditors to get more opportunities. Owing to the immutable nature of blockchain technology, it is impossible to update the code afterits deployment. Placing smart contracts without adequate audits could lead to undesirable situations like differences in the contract's intended performance, gas leakage, and more. 43% Web3 hacks in 2022 were due to contract vulnerabilities, of which 52% were not audited. <br>
      <ol>
        <li>
          <strong>Select A Jury</strong>: There are 5 jury members selected for every audit. They control a 3/5 multisig that approves a detected bug once it is reported by an auditor.
        </li>
        <li>
          <strong>Pools are created</strong>: Once the contract is deployed, 2equally-funded betting pools arecreated, called NoBugs and YesBugs
        </li>
        <li>
          <strong>Auditors audit and fund pools</strong>: A security auditor looks at the deployed contract and judges whether there are bugs in this contract or not. Till the time a bug has been reported, the money from the YesBugs pool starts streaming to NoBugs pool, such thatthe YesBugs pool will be exhausted in 30 days.
        </li>
        <li>
          <strong>Pool Liquidation</strong>: If a security engineer finds a bug, they may report the bug to the jury. The jury will vote with their signature on whether the bugis a severe bug. If the jury accepts the bug to be a severe bug, the NoBugs pool is liquidated and all the money from NoBugs pool is distributed to the people who funded the YesBugs pool.
        </li>
      </ol>
    </td>
  </tr>
  </table>

## 🔗Links

### Assets

- [GitHub Repo](https://github.com/saRvaGnyA/auditopia)
- [Scroll Sepolia Deployment](https://sepolia-blockscout.scroll.io/address/0x7014902fd04CE2efC0a084369e7B99041490790f/)
- [TheGraph Subgraph Studio]()

## 🤖Tech-Stack

### Frontend

- NextJS

### Smart Contract

- Solidity, deployed on Scroll Sepolia

### Contract Event Indexing

- TheGraph

### Offchain Computation, Cronjobs

- Chainlink VRF
- Chainlink Services

## 👩‍💻Team Members

- [@Smit Sekhadia](https://github.com/smitsekhadiaa)
- [@Ananya Bangera](https://github.com/ananya-bangera)
- [@Harsh Nag](https://github.com/Jigsaw-23122002)
- [@Chaitya Vora](https://github.com/vorachaitya)
- [@Sarvagnya Purohit](https://github.com/saRvaGnyA)
