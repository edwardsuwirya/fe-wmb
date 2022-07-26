import {table} from "../model/table";

const tables = [
    table('001', '001', 'A'),
    table('002', '002', 'U'),
    table('003', '003', 'A'),
]

export function tableService() {
    const showAll = function () {
        return tables;
    }
    const addNewTable = function (newTable) {
        tables.push(newTable);
    }
    return {
        showAll, addNewTable
    }
}
