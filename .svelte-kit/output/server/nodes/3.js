

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/clicker/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.p6moVhu5.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.2K0tcjdy.js"];
export const stylesheets = ["_app/immutable/assets/3.Bz1Vp67b.css"];
export const fonts = [];
