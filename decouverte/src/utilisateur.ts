import { StringNullable } from './custom-types';

export interface SeDeplacer {
    seDeplacer(): void;
}

export interface SeDeplacerEtVoler extends SeDeplacer {
    voler(): void;
}

const baleineDeLespace: SeDeplacerEtVoler = {
    seDeplacer: () => {

    },
    voler: () => {
        
    }
}

export interface MouvementVertical {
    sauter(): number;
}

export class UserFiger {
    seDeplacer(): void {
        console.info('Je me déplace à pied');
    }
}

/**
 * Ma classe utilisateur
 */
export class Utilisateur implements SeDeplacer, MouvementVertical {
    private _prenom !: string;
    private _nom : string;
    private _role: StringNullable;
    private _dateNaissance !: Date;

    constructor(prenom: string, nom: string, role: string | undefined | null, date?: Date) {
        this.prenom = '';
        this._nom = nom;
        this._role = role;
        
        if (typeof(date) !== 'undefined') { // les guardiens de type => Type Guard
            this._dateNaissance = date;
        }
    }

    sauter(): number {
        console.info('boing boooing');
        return Math.random() * 1000;
    }

    seDeplacer(): void {
        console.info('Je me déplace à pied');
    }

    manger(): void {
        console.info('je mange miam');
    }

    get prenom(): string {
        return this._prenom;
    }
    set prenom(value: string) {
        this._prenom = value;
    }
}