import puppeteer from 'https://deno.land/x/puppeteer@9.0.2/mod.ts';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("https://vasco.com.br/futebol-elenco-2/");

await page.waitForSelector('.box.shadow-sm')
const playerList = await page.evaluate(() => {
  const boxList = document.querySelectorAll('.box.shadow-sm')
  const boxArray = Array.from(boxList)

  return boxArray.map(el => ({
    "number": el?.querySelector('span.numero')?.innerHTML,
    "position": el?.querySelector('span.posicao')?.innerHTML,
    "name": el?.querySelector('h2')?.innerText,
    "avatar": (el?.querySelector('img.foto') as HTMLImageElement).src,
}))
})
console.log(playerList)

await browser.close();
