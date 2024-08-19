import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "p.svelte-1u2nlim,h1.svelte-1u2nlim{color:white\n    }",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<head>\\n    <meta charset=\\"UTF-8\\">\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n    <title>Students-database</title>\\n</head>\\n<body>\\n    <h1 style = \\"color:red\\">Info</h1>\\n    <h1>Welcome to Students-database</h1>\\n    <p>Student Database is a robust project leveraging Python and PostgreSQL to manage student data. It provides functionality for inserting, deleting, and sorting student records efficiently within the database. This implementation ensures reliable data handling and streamlined database operations for educational institutions.</p>\\n</body>\\n<style>\\n    p, h1, h2{\\n        color:white\\n    }\\n</style>\\n"],"names":[],"mappings":"AAWI,gBAAC,CAAE,iBAAM,CACL,MAAM,KAAK;AACnB,IAAI"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<head data-svelte-h="svelte-1fjiror"><meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Students-database</title></head> <body data-svelte-h="svelte-1odwxlh"><h1 style="color:red" class="svelte-1u2nlim">Info</h1> <h1 class="svelte-1u2nlim">Welcome to Students-database</h1> <p class="svelte-1u2nlim">Student Database is a robust project leveraging Python and PostgreSQL to manage student data. It provides functionality for inserting, deleting, and sorting student records efficiently within the database. This implementation ensures reliable data handling and streamlined database operations for educational institutions.</p> </body>`;
});
export {
  Page as default
};
