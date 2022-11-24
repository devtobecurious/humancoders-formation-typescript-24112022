import M from 'materialize-css';

export class CreatePlayer {
    prepareUI(): void {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    }
}