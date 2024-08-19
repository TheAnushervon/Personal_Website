import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "h1.svelte-mnshd2,h2.svelte-mnshd2,p.svelte-mnshd2{color:white\n    }",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<svelte:head>\\n    <meta charset=\\"UTF-8\\">\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n    <title>Cryptoclicker</title>\\n    <link rel=\\"stylesheet\\" href=\\"src/styles/global.css\\">\\n</svelte:head>\\n\\n<h1 style=\\"color: red\\">Info</h1>\\n<h2>Welcome to CryptoClicker</h2>\\n<p>\\n    CryptoClicker is a website that simulates clicking a button to increase the user's score. It utilizes PostgreSQL and Django for backend technologies, and React for the frontend.\\n    <br><br>\\n    Link to the project <a href=\\"https://github.com/absorian/cryptoclicker\\">Click</a>\\n</p>\\n<style>\\n    h1, h2, p{\\n        color: white\\n    }\\n</style>"],"names":[],"mappings":"AAeI,gBAAE,CAAE,gBAAE,CAAE,eAAC,CACL,KAAK,CAAE,KAAK;AACpB,IAAI"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1izm07l_START --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${$$result.title = `<title>Cryptoclicker</title>`, ""}<link rel="stylesheet" href="src/styles/global.css"><!-- HEAD_svelte-1izm07l_END -->`, ""} <h1 style="color: red" class="svelte-mnshd2" data-svelte-h="svelte-uas3r6">Info</h1> <h2 class="svelte-mnshd2" data-svelte-h="svelte-q7eunn">Welcome to CryptoClicker</h2> <p class="svelte-mnshd2" data-svelte-h="svelte-6mwt1">CryptoClicker is a website that simulates clicking a button to increase the user&#39;s score. It utilizes PostgreSQL and Django for backend technologies, and React for the frontend.
    <br><br>
    Link to the project <a href="https://github.com/absorian/cryptoclicker">Click</a> </p>`;
});
export {
  Page as default
};
