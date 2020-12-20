import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor(private dataService: DataService) {
    }

    getClients() {
        return this.dataService.get('clients.json');
    }
}
