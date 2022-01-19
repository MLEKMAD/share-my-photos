import { writable } from 'svelte/store';

export const modal = writable(null);
export const windowStyle = writable({});
export const images = writable([])
export const imageShowingIndex = writable(0)