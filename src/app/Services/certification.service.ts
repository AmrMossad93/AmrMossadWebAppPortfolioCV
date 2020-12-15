import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class CertificationService {

    constructor(private dataService: DataService) {
    }

    getAllCertifications() {
        return this.dataService.get('certification.json');
    }
}
