import { Query } from "./";
import { Character } from "../applications/domains/character";

export class CharactersService extends Query<Character> {

}

const service = new CharactersService();
const array = await service.getAll();

function afficher<T extends {id: number}>(item: T) {
    console.info(item.id);
}

afficher({ id: 1});