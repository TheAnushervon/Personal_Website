

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/students/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.BUugwExt.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.2K0tcjdy.js"];
export const stylesheets = ["_app/immutable/assets/7.CbS280Q3.css"];
export const fonts = [];
