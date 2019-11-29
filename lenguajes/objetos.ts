class Persona {
    /* public nombre: string
    public edad: number
    constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
    } */
    constructor(
        public nombre: string,
        public edad: number
    ) {}

    saludar(): void {
        console.log(`Hola soy ${this.nombre}`)
    }
}

const p1 = new Persona('Pepe', 25)
const p2 = new Persona('Elena', 32)

delete p2.edad
// p2.color = 'Amarillo'

console.log(p1,p2)
p1.saludar()
p2.saludar()

class Alumno extends Persona {
    curso: string
    constructor(nombre: string, edad: number, curso:string) {
        super(nombre, edad)
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}

const a1 = new Alumno('Ernesto', 32, 'Angular')
a1.saludar()
