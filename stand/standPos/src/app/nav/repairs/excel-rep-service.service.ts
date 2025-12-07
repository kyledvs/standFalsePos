import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as XLSX from 'xlsx';


@Injectable({
  providedIn: 'root'
})
export class ExcelRepServiceService {
  constructor(private firestore: AngularFirestore) { }

  async uploadExcelToFirestore(file: File) {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet, { defval: '' });

    const batch = this.firestore.firestore.batch();
    console.log("in service")
    json.forEach((row: any) => {
      const docRef = this.firestore.collection('stockIndiced').doc('floorY').collection('floorY').doc().ref;
      batch.set(docRef, row);
      console.log("INDICED")
    })
    ;

    await batch.commit();
    console.log('Upload complete IND');
  }



  async uploadExcelToFirestoreMaster(file: File) {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet, { defval: '' });

    const batch = this.firestore.firestore.batch();
    console.log("in service master")
    json.forEach((row: any) => {
      const docRef = this.firestore.collection('masterStock').doc().ref;
      batch.set(docRef, row);
      console.log("mastered")
    })
      ;

    await batch.commit();
    console.log('Upload complete master');
  }




}
