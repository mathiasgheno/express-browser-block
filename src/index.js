import Bowser from "bowser"

const htmlDefault = `
  <h1>Please, upgrade your browser</h1>  
`

const conditionsDefault = {
  windows: {
    "internet explorer": ">10",
  },
  macos: {
    safari: ">10.1"
  },
  mobile: {
    safari: '>=9',
    'android browser': '>3.10'
  },
  chrome: ">96",
  firefox: ">31",
  opera: ">=22",
}

/**
 * @typedef BrowserConditions
 * @property {object} windows
 * @property {object} macos
 * @property {object} mobile
 * @property {string} chrome
 * @property {string} firefox
 * @property {string} opera
 */

/**
 * @description
 *
 * # What this does
 * This function is going to return the middleware funtion that will block the request's user if the browser does not satisfies.
 * The first argument is the coditions. See [Browser documentation for more dails](https://github.com/lancedikson/bowser#filtering-browsers).
 * The secund argument is the HTML that will be returned if the browser does not satisfies.
 *
 * # How to use
 * The simplest way to use it is throught express `.use`.
 *
 * ```js
 * import express from 'express';
 * import { blockRequestIfBrowserIsNot } from 'express-browser-block';
 * const app = express();
 *
 * app.use(blockRequestIfBrowserIsNot());
 * ```
 *
 * @param conditions {BrowserConditions}
 * @param html {string}
 * @returns {(function(req, res, next): void)|*}
 */
export const blockRequestIfBrowserIsNot = (conditions = conditionsDefault, html = htmlDefault) => {
  return (req, res, next) => {
    const browser = Bowser.getParser(req.headers['user-agent']);
    const allowedBrowser = browser.satisfies(conditions);
    if (allowedBrowser) {
      next();
    } else {
      res.send(html)
    }
  }
}
