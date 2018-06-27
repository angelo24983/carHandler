import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Duty } from './shared/duty';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const duties: Duty[] = [
      { id: 1, name: 'Assicurazione Rca' },
      { id: 2, name: 'Bollo' },
      { id: 3, name: 'Gomme' },
      { id: 4, name: 'Tagliando' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'Assicurazione Furto' }
    ];
    return {duties};
  }
}