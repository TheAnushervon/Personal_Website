

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/myblog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BTyB6GRW.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.2K0tcjdy.js"];
export const stylesheets = ["_app/immutable/assets/4.BIauhYmO.css"];
export const fonts = [];
