import { SeDeplacer, UserFiger, Utilisateur } from './utilisateur';
import { calculTVA } from './tva';

let pointDeVie: number;

pointDeVie = 18;

/// Découverte de la classe
const user = new Utilisateur('Luke', 'Skywalker', null);

// Méthode classe
user.manger();
user.seDeplacer();

// Cadrage par interface
function deplacer(item: SeDeplacer) {
    item.seDeplacer();
}

const userFreeze = new UserFiger();

deplacer(user);
// UserFiger n'a pas l'interface mais a la méthode qui a la MEME signature donc c'est ok !! :=p
deplacer(userFreeze);


//---------------------------------------------------------------------------------------
/// Decouverte any
let uneVariableAny;
uneVariableAny = 18;
uneVariableAny = 'coucou';

const resultTTC  = calculTVA(12);

// --- any: pas bien !
function calculJeSaisPasQuoiPourLinstantAny(value: any) {
    const val = value.toString();
    const result = value + 18;
}
calculJeSaisPasQuoiPourLinstantAny(1);
calculJeSaisPasQuoiPourLinstantAny('coucou');

// --- unknown mieux :)
function calculJeSaisPasQuoiPourLinstant(value: unknown) {
    if (typeof value === 'number') {
        const result = value + 18;
    }
}
calculJeSaisPasQuoiPourLinstant(1);
calculJeSaisPasQuoiPourLinstant('coucou');

// pointDeVie = 'coucou';


// class Player {
//     pointsDeVie = 100;
// }

// -------------------------------------------

type UserType = {
    prenom: string
}

const userJson: UserType = {
    prenom: 'Leia'
};

function afficherLesInfosDunUser(value: UserType): void {
    console.info(value.prenom);
}

afficherLesInfosDunUser(userJson);
afficherLesInfosDunUser(user);

// ---------


function machineACalculer(item: { tva: number, montantHT: number}): number {
    return item.montantHT * item.tva;
}
machineACalculer({ tva: 1.2, montantHT: 200 });

// ------

class Role {
    id !: number;
    libelle = '';

    constructor(id: number);
    constructor(id: number, libelle: string);
    constructor(id: number, libelle?: string, puissance?: number) {
        if(typeof libelle !== 'undefined') {
            this.libelle = libelle;
        }
    }
}

const role = new Role(1);

const role2: Role = {
    id: 2,
    libelle: 'Admin'
};

function attribuerRole(role: Role) {
    console.info('Tu quoque mi fili', role.libelle);
}
attribuerRole(role);
attribuerRole(role2);

// function User() {
//     this.name = '';
// }


