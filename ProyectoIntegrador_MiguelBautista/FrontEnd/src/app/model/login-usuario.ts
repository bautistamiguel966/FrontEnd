export class LoginUsuario {
    nombreUsuarios: string;
    password: string;

    constructor(nombreUsuarios: string, password: string) {
        this.nombreUsuarios = nombreUsuarios;
        this.password = password;
    }
}
