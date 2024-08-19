import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "h1.svelte-tmoe32,p.svelte-tmoe32{color:white\n    }",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["\\n<svelte:head>\\n    <meta charset=\\"UTF-8\\">\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n    <title>MyBlog</title>\\n    <link rel = \\"stylesheet\\" href = \\"src/lib/styles2.css\\">\\n</svelte:head>\\n<body>\\n    <h1 style = \\"color:red\\">Info</h1>\\n    <h1> Welcome to MyBlog</h1>\\n    <p>MyBlog is a dynamic project built using Python Django, designed to manage notes as separate sections. It features robust functionality for inserting and deleting notes, ensuring efficient content management and a seamless user experience. This project exemplifies effective use of Django's capabilities for web development and data handling.</p>\\n</body>\\n\\n<style>\\n    h1, p {\\n        color: white\\n    }\\n</style>"],"names":[],"mappings":"AAcI,gBAAE,CAAE,eAAE,CACF,KAAK,CAAE,KAAK;AACpB,IAAI"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-13dlkvv_START --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${$$result.title = `<title>MyBlog</title>`, ""}<link rel="stylesheet" href="src/lib/styles2.css"><!-- HEAD_svelte-13dlkvv_END -->`, ""} <body data-svelte-h="svelte-tgxcev"><h1 style="color:red" class="svelte-tmoe32">Info</h1> <h1 class="svelte-tmoe32">Welcome to MyBlog</h1> <p class="svelte-tmoe32">MyBlog is a dynamic project built using Python Django, designed to manage notes as separate sections. It features robust functionality for inserting and deleting notes, ensuring efficient content management and a seamless user experience. This project exemplifies effective use of Django&#39;s capabilities for web development and data handling.</p> </body>`;
});
export {
  Page as default
};
