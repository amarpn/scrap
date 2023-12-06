import request from "request";
import * as cheerio from 'cheerio';
import chalk from "chalk";

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard', cb);

function cb(error, response, html) {
    if (error) {
        console.error('error:', error); 
    } else {
        handlehtml(html);
    }
}
function handlehtml(html) {
    let selTool = cheerio.load(html);
    let contentArr = selTool(".ds-text-tight-m.ds-font-medium.ds-text-typo.ds-underline.ds-decoration-ui-stroke");
    let man_of_match = selTool(contentArr[1]).text();
    let player_of_series = selTool(contentArr[2]).text()
    console.log("Man of the match is", man_of_match)
    console.log("Player of the series is", player_of_series)
}