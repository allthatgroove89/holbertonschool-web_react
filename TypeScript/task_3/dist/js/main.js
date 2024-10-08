/// <reference path="./crud.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Imports everything from crud.js as CRUD
import * as CRUD from './crud';
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};
// Insert a row
var newRowID = CRUD.insertRow(row);
console.log("New row ID: ".concat(newRowID));
var updateRow = __assign(__assign({}, row), { age: 23 });
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
//# sourceMappingURL=main.js.map