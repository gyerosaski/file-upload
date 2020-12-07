import { Injectable } from '@angular/core';
import { History } from './history.model';
import { HistoryStore } from './history.store';

@Injectable({ providedIn: 'root' })
export class HistoryService {

  constructor(
    private historyStore: HistoryStore) { }

  add(history: History) {
    this.historyStore.add(history);
  }

  removeAll() {
    this.historyStore.remove();
  }

}
