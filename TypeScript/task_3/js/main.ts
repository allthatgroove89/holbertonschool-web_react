/// <reference path="./crud.d.ts" />

// Imports rowID and rowElement from interface.ts
import { RowID, RowElement } from './interface';

//Imports everything from crud.js as CRUD
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

// Insert a row
const newRowID: RowID = CRUD.insertRow(row);
console.log(`New row ID: ${newRowID}`);

const updateRow: RowElement = {
    ...row,
    age: 23,
};

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
