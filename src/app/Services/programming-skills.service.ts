import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class ProgrammingSkillsService {

    constructor(private dataService: DataService) {
    }

    getProgrammingSkills() {
        return this.dataService.get('programmingSkillsProgress.json');
    }
}
