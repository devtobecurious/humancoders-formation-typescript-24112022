import { Game } from './applications/domains/game';
import { Player } from './applications/domains/player';
import { Startup } from './applications/domains/start';
import { afficherInfo } from './applications/tools';
import { CreatePlayer } from '../src/infrastructures/create-player';

const fabricLogger = () => {
    let logger: afficherInfo;
    const isProd = false;

    logger = item => console.info(item);
    if (isProd) {
        logger = item => console.log(item);
    }

    return logger;
};

const player = new Player('Han', 100);
const game = new Game(player, new Date(), fabricLogger());
const createPlayer = new CreatePlayer();

function launch(starter: Startup): void {
    createPlayer.prepareUI();
    starter.start();
}

launch(game);