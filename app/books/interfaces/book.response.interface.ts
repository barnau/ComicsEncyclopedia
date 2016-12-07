import { IData } from './book.data.interface';

export interface IApiResponse {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: IData;
    
}