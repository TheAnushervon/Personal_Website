

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/parser/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DI_uQ-14.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.2K0tcjdy.js"];
export const stylesheets = [];
export const fonts = [];
