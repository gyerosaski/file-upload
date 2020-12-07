import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { History } from 'src/app/store/history.model';
import { HistoryQuery } from 'src/app/store/history.query';
import { HistoryService } from 'src/app/store/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history$: Observable<History[]>

  constructor(
    private historyQuery: HistoryQuery,
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    this.history$ = this.historyQuery.getAll$;
  }

  onClearClick() {
    this.historyService.removeAll();
  }

}
