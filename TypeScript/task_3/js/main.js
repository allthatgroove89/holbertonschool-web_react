"use strict";
export const __esModule = true;
//Imports everything from crud.js as CRUD
import { insertRow, updateRow as _updateRow, deleteRow } from "./crud.js";
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = insertRow(row);
var updateRow = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
};
_updateRow(newRowID, updateRow);
deleteRow(newRowID);
