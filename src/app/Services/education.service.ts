import { Injectable } from '@angular/core';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

    constructor(private dataService: DataService) {
    }

    getEducationDetails() {
        return this.dataService.get('education.json');
    }
}
