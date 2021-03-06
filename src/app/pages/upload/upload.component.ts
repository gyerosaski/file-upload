import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { guid } from '@datorama/akita';
import { FadeInOutAnimation } from 'src/app/animations/animations';
import { FileTreeComponent } from 'src/app/modals/file-tree/file-tree.component';
import { HistoryService } from 'src/app/store/history.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  animations: [
    FadeInOutAnimation
  ]
})
export class UploadComponent {
  selectedFileDirectory: string;
  isUploading = false;
  isUploadSuccess = false;

  constructor(
    private modal: MatDialog,
    private historyService: HistoryService
  ) { }

  onBrowseClick() {
    const modalRef = this.modal.open(FileTreeComponent, {
      minWidth: '480px',
      height: '580px',
      panelClass: 'dialog-responsive'
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
      this.historyService.add({
        dir: this.selectedFileDirectory,
        id: guid()
      })
    },5000);
  }

}
