export class StudentNfcRelation {

    idNfc: string;
    alumno: {
        id: string;
        nombreAlumno: string;
        pApellido: string;
        mApellido: string
        nombreCompleto: string
        campus: {
            idEscuela: number;
            nombreEscuela: string;
        },
        career: {
            idCarrera: number;
            nombreCarrera: string;
        }
    }

}
