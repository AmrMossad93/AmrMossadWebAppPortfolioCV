import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DataService {


    constructor(public httpClient: HttpClient) {
    }

    get(JSONFileName: string) {
        return this.httpClient.get(`${environment.jsonFilePath}${JSONFileName}`);
    }
}
