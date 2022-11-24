export class Player {

    constructor(public pseudo: string, private _pointsDeVie: number) {}

    get pointsDeVie() {
        return this._pointsDeVie;
    }
    set pointsDeVie(value: number) {
        this._pointsDeVie = value;
    }
}