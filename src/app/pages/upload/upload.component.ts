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
    const modalRef = this.modal.open(FileTreeComponent, {
      minWidth: '480px',
      height: '580px'
    });
    modalRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

}
