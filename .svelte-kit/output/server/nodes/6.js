

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/quizcraft/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Dtg6oXR4.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.2K0tcjdy.js"];
export const stylesheets = [];
export const fonts = [];
