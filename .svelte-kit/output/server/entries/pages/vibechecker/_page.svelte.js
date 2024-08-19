import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "p.svelte-1u2nlim,h1.svelte-1u2nlim{color:white\n    }",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<svelte:head>\\n    <meta charset=\\"UTF-8\\">\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n    <title>Vibechecker</title>\\n</svelte:head>\\n<body>\\n    <h1 style = \\"color: red\\">Info</h1>\\n    <h1>Welcome to VibeChecker</h1>\\n    <p>\\n        VibeChecker is a sophisticated application developed using Flutter. It leverages an advanced model to analyze and interpret the mood of comments posted under YouTube videos. This integration provides valuable insights into the sentiment of user interactions, enhancing the understanding of audience engagement.\\n    <br><br> Link to the project: <a href=\\"https://drive.google.com/drive/folders/16lOZ_vbGLMT0sGDB8zyrTQsRqmVDCfKA\\">Click</a>\\n    </p>\\n    \\n</body>\\n<style>\\n    p, h1, h2{\\n        color:white\\n    }\\n</style>\\n"],"names":[],"mappings":"AAeI,gBAAC,CAAE,iBAAM,CACL,MAAM,KAAK;AACnB,IAAI"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ihdd12_START --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${$$result.title = `<title>Vibechecker</title>`, ""}<!-- HEAD_svelte-ihdd12_END -->`, ""} <body data-svelte-h="svelte-lmuwi4"><h1 style="color: red" class="svelte-1u2nlim">Info</h1> <h1 class="svelte-1u2nlim">Welcome to VibeChecker</h1> <p class="svelte-1u2nlim">VibeChecker is a sophisticated application developed using Flutter. It leverages an advanced model to analyze and interpret the mood of comments posted under YouTube videos. This integration provides valuable insights into the sentiment of user interactions, enhancing the understanding of audience engagement.
    <br><br> Link to the project: <a href="https://drive.google.com/drive/folders/16lOZ_vbGLMT0sGDB8zyrTQsRqmVDCfKA">Click</a></p> </body>`;
});
export {
  Page as default
};
