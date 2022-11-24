export type WithId = { id: number };
export type WithIdOuAvecEntier = WithId | number;

export type WithIdEtLabel = {
    label: string
} & WithId;

const character: WithIdEtLabel = {
    label: 'Dark',
    id: 1
};

function travaillerSurLesEntiers(value: WithIdOuAvecEntier): void {
    if (typeof value === "number") {
        const result = value + 1;
    } else {
        const result = value.id + 1;
    }
}

export class Query<T extends { id2: number }> {
    async getAll(): Promise<Array<T>> {
        const response = await fetch('https://swapi.dev/api/people');
        const data = await response.json();

        return data;
    }
}