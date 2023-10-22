// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import "@tableland/evm/contracts/utils/SQLHelpers.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract TableLand is ERC721Holder {
    struct jury {
        address walletId;
        string name;
        uint256 experience;
        string bio;
    }
    jury[5] juries = [
        jury(
            0x8c6211c516fcaffDc9F4CFac12300C9e9Ee2A7aA,
            "Eth_Online_2023_Jury_01",
            5,
            "I am the first jury for the project Auditopia in ETH-Online 2023."
        ),
        jury(
            0xf8C27C637ca604b66012288E95f148bCa73Bc3A9,
            "Eth_Online_2023_Jury_02",
            5,
            "I am the second jury for the project Auditopia in ETH-Online 2023."
        ),
        jury(
            0xb73a393259328d0991a95d96ebE8c65fbB48A9e4,
            "Eth_Online_2023_Jury_03",
            5,
            "I am the third jury for the project Auditopia in ETH-Online 2023."
        ),
        jury(
            0x89Cd2006c9F455b483FEce4D7c344Ea65fc1684e,
            "Eth_Online_2023_Jury_04",
            6,
            "I am the fourth jury for the project Auditopia in ETH-Online 2023."
        ),
        jury(
            0x4D3b448A7f9417C444299ebFa45789300384EF6e,
            "Eth_Online_2023_Jury_05",
            6,
            "I am the fifth jury for the project Auditopia in ETH-Online 2023."
        )
    ];
    uint256 public _juryTableId;

    string private constant _JURY_TABLE_PREFIX = "Eth_Online_2023_Jury";

    constructor() {
        createTables();
        insertIntoTable();
    }

    function createTables() public payable returns (uint256) {
        _juryTableId = TablelandDeployments.get().create(
            address(this),
            SQLHelpers.toCreateFromSchema(
                "wallet_id integer primary key, name text, experience integer, bio text",
                _JURY_TABLE_PREFIX
            )
        );
        return _juryTableId;
    }

    function insertIntoTable() public payable {
        for (uint256 i = 0; i < 5; i++) {
            TablelandDeployments.get().mutate(
                address(this),
                _juryTableId,
                SQLHelpers.toInsert(
                    _JURY_TABLE_PREFIX,
                    _juryTableId,
                    "wallet_id,name,experience,bio",
                    string.concat(
                        Strings.toString(abi.encodePacked(juries[i].walletId)),
                        ",",
                        SQLHelpers.quote(juries[i].name),
                        ",",
                        Strings.toString(juries[i].experience),
                        ",",
                        SQLHelpers.quote(juries[i].bio)
                    )
                )
            );
        }
    }
}
