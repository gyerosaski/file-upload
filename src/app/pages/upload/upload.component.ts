import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileTreeComponent } from 'src/app/modals/file-tree/file-tree.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(
    private modal: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onBrowseClick() {
    const modalRef = this.modal.open(FileTreeComponent);
    modalRef.afterClosed().subscribe(res => {

    });
  }

}
