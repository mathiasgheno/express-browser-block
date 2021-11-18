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
