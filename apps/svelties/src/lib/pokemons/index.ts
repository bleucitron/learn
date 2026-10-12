import { getRandomNumber } from '../utils/getRandomNumber';
import data from './data.json';

export function getPokemon(id: number | string) {
	id = Number(id);
	const pokemon = data[id - 1];

	return pokemon;
}

export function getAllPokemons() {
	return data;
}

export function getPokemonTypes() {
	const types = data.flatMap((pokemon) => pokemon.types.map((t) => t.type.name));

	return [...new Set(types)];
}

export function fetchPokemon(id: number | string) {
	return Promise.resolve(getPokemon(id));
}

export function fetchPokemons() {
	return Promise.resolve(getAllPokemons());
}

export function fetchPokemonTypes() {
	return Promise.resolve(getPokemonTypes());
}

export function fetchTotalPopulation() {
	const duration = getRandomNumber(500, 4_000);
	const population = getRandomNumber(10_000);

	return new Promise<number>((resolve) => setTimeout(() => resolve(population), duration));
}

export const translations: Partial<Record<'fr' | 'en', Record<string, string>>> = {
	fr: {
		bulbasaur: 'bulbizarre',
		charmander: 'salamèche',
		squirtle: 'carapuce'
	}
};
