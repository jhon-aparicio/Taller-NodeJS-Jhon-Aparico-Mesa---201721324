class Book{
    constructor(nombre, autor, editorial, anio, paginas, estado){
        this.nombre=nombre;
        this.autor=autor;
        this.editorial=editorial;
        this.anio=anio;
        this.paginas=paginas;
        this.estado=estado;
    }

    getBook(){
        return `
            nombre=${this.nombre}
            autor=${this.autor}
            editorial=${this.editorial}
            año=${this.anio}
            paginas=${this.paginas}
            estado=${this.estado}
        `
    }
    getNombre(){
        return this.nombre
    }
    getAutor(){
        return this.autor
    }
    getEditorial(){
        return this.editorial
    }
    getPaginas(){
        return this.paginas
    }
    getAnio(){
        return this.anio
    }
    getEstado(){
        return this.estado
    }
}
module.exports = Book