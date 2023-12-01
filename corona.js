import request from "request";
import cheerio from "cheerio";
import chalk from "chalk";

request('https://www.worldometers.info/coronavirus', cb);

function cb(error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    } else {
        handlehtml(html);
    }
}
function handlehtml(html) {
    let selTool = cheerio.load(html);
    let contentArr = selTool("#maincounter-wrap span");

    let total = selTool(contentArr[0]).text();
    let deaths = selTool(contentArr[1]).text();
    let recovered = selTool(contentArr[2]).text();

    console.log(chalk.gray("Total Cases: "+total));
    console.log(chalk.red("Deaths: "+deaths));
    console.log(chalk.green("Recovery : "+recovered));


}