export class StudentProfile {

    nombreAlumno: string;
    pApellido: string;
    mApellido: string;
    nombreCompleto: string;
    password: string;
    id: string;
    career: {
        idCarrera: number;
        nombreCarrera: string;
    };
    campus: {
        idEscuela: number;
        nombreEscuela: string;
    };

}
