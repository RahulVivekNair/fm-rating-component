import { writable } from "svelte/store";

export const selectedValue = writable(0);
export function updateRating(event: MouseEvent): void {
  selectedValue.set(Number((event.target as HTMLButtonElement).innerHTML));
}
