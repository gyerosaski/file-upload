import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss']
})
export class FileTreeComponent implements OnInit {

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.fileTreeGet().subscribe(() => {

    });
  }

}
