import { writable } from "svelte/store";

export const submitStatus = writable(false);

export function updateval() {
  submitStatus.update((value) => !value);
}
