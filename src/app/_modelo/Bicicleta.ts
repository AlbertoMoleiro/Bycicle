//Create a typescript class width the atributes color, velocidad, pinhones, platos,electrica, y los metodos acelerar y frenar que reciben el parametro velocidad

type pinhon = 1|2|3|4|5|6|7;
type plato = 1|2|3;
export class Bicicleta {

    private _color: string;
    private _marca: string;
    private _velocidad: number;
    private _pinhones: pinhon;
    private _platos: plato;
    private _electrica: boolean;


    constructor(color: string,marca:string, pinhones: pinhon, platos: plato, electrica: boolean) {
        this._color = color;
        this._marca = marca;
        this._velocidad = 0;
        this._pinhones = pinhones;
        this._platos = platos;
        this._electrica = electrica;
    }

    acelerar(velocidad: number) {
        this.velocidad += velocidad;
    }

    frenar(velocidad: number) {
        this.velocidad -= velocidad;
        if (this.velocidad < 0) {
            this.velocidad = 0;
        }
    }
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    public get marca(): string {
      return this._marca;
    }
    public set marca(value: string) {
      this._marca = value;
    }
    public get velocidad(): number {
        return this._velocidad;
    }
    public set velocidad(value: number) {
        this._velocidad = value;
    }
    public get pinhones(): pinhon {
        return this._pinhones;
    }
    public set pinhones(value: pinhon) {
        this._pinhones = value;
    }
    public get platos(): plato {
        return this._platos;
    }
    public set platos(value: plato) {
        this._platos = value;
    }
    public get electrica(): boolean {
        return this._electrica;
    }
    public set electrica(value: boolean) {
        this._electrica = value;
    }
}
