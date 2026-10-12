import { createContext } from 'svelte';

export type Lang = 'fr' | 'en';

export const [getLangContext, setLangContext] = createContext<() => Lang>();
