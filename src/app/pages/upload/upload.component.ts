import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FadeInOutAnimation } from 'src/app/animations/animations';
import { FileTreeComponent } from 'src/app/modals/file-tree/file-tree.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  animations: [
    FadeInOutAnimation
  ]
})
export class UploadComponent implements OnInit {
  selectedFileDirectory: string;
  isUploading = false;
  isUploadSuccess = false;

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
      if (res) {
        this.selectedFileDirectory = res;
        this.isUploading = false;
        this.isUploadSuccess = false;
      }
    });
  }

  onUploadClick() {
    this.isUploading = true;
    this.isUploadSuccess = false;
    setTimeout(() => {
      this.isUploading = false;
      this.isUploadSuccess = true;
    },5000);
  }

}
