import { Player } from "./player";
import { afficherInfo } from "../../applications/tools";
import { Startup } from "../domains/start";

export class Game implements Startup {
    // player: Player;    
    constructor(protected player: Player, public dateDebutPartie: Date, protected logger: afficherInfo) {
    }

    start(): void {
        this.logger('Démarrage');
    }
}

export class ChildGame extends Game {
    constructor(childPlayer: Player, logger: afficherInfo) {
       //  const hello = ''; c'est tout nouveau on peut maintenant mettre du code avant le super
        super(childPlayer, new Date(), logger);
        // this.player => on y a accès grâce à protected dans le constructor parent
    }
}

// const game = new Game(new Player(), new Date());
// // game.player  n'est pas accessible de l'extérieur !
// const child = new ChildGame(new Player());
