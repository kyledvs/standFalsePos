import { Component } from '@angular/core';
import { ExcelRepServiceService } from '../excel-rep-service.service';


@Component({
  selector: 'app-uploadrepairxls',
  templateUrl: './uploadrepairxls.component.html',
  styleUrl: './uploadrepairxls.component.css'
})
export class UploadrepairxlsComponent {
  constructor(private ExcelRepServiceService: ExcelRepServiceService) { }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) this.ExcelRepServiceService.uploadExcelToFirestore(file);
    console.log("uploaded a file")
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file) this.ExcelRepServiceService.uploadExcelToFirestore(file);
    console.log("dragged a file")
  }

}
