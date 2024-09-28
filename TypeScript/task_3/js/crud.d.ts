// crud.d.ts
import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): number;
export function deleteRow(rowId: number): number;
export function updateRow(rowId: number, row: RowElement): number;
