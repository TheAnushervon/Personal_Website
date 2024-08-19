

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.k672fpX7.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.2K0tcjdy.js"];
export const stylesheets = ["_app/immutable/assets/0.BEQ5QS4F.css"];
export const fonts = [];
