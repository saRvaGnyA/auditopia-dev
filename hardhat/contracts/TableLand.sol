// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import "@tableland/evm/contracts/utils/SQLHelpers.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract TableLand is ERC721Holder {
    struct jury {
        uint256 walletId;
        string name;
        uint256 experience;
        string bio;
    }
    jury[5] juries = [
        jury(1, "", 5, ""),
        jury(2, "", 5, ""),
        jury(3, "", 5, ""),
        jury(4, "", 6, ""),
        jury(5, "", 6, "")
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
                        Strings.toString(juries[i].walletId),
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
