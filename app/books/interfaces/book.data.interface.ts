import { IBookResult } from './book.interface'

export interface IData {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: IBookResult[];
}