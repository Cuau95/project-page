export class CompanyStudentEventRelation {
    idRelacion: number;
    alumno: {
        id: string;
        nombreAlumno: string;
        pApellido: string;
        mApellido: string;
        nombreCompleto: string;
        campus: {
            idEscuela: number;
            nombreEscuela: string;
        };
        career: {
            idCarrera: number;
            nombreCarrera: string;
        }
    };
    empresa: {
        idEmpresa: string;
        nombreEmpresa: string;
        telefono: string;
        direcion: string;
        colonia: string;
        delegacion: string;
        correo: string;
        password: string;
    };
    feriaEmpleo: {
        idEvento: number;
        nombreFeria: string;
        direccionEvento: string;
        fechaInicio: Date;
        fechaFin: Date;
    };
    fecha: Date;
}
