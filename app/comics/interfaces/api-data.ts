import { ICharacterResult } from './api-character-result'

export interface IData {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: ICharacterResult[];
}