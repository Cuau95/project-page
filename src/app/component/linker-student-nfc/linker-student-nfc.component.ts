import { Component, OnInit } from '@angular/core';
import { LinkerStudentNfcService } from 'src/app/services/linker-student-nfc.service';

@Component({
  selector: 'app-linker-student-nfc',
  templateUrl: './linker-student-nfc.component.html',
  styleUrls: ['./linker-student-nfc.component.scss']
})
export class LinkerStudentNfcComponent implements OnInit {

  user: string;
  message: string;

  constructor(private linkerService: LinkerStudentNfcService) { }

  ngOnInit() {
  }

  linkWithIdNFC() {
    this.message = '';
    try{
      this.linkerService.linkStudentAndNFC(this.user).subscribe((res) => {
        if(res === null){
          this.message = 'Error, Estudiante no encontrado, o NFC no disponible'
        }
        this.message = 'Se ha vinculado al nfc: ' + res.idNfc;
      });
    } catch(ex){
      console.log(ex);
    }
  }

}
