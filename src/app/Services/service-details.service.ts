import { Injectable } from '@angular/core';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailsService {

    constructor(private dataService: DataService) {
    }

    getServiceDetails() {
        return this.dataService.get('services.json');
    }
}
