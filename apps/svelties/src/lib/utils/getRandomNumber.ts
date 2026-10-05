/**
 * Fournit un nombre entier aléatoire entre a et b
 */
export function getRandomNumber(a: number, b = 0) {
	return Math.floor(Math.min(a, b) + Math.random() * Math.abs(a - b));
}
