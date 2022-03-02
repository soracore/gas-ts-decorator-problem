# gas-ts-decorator-problem

## reproduce steps(easy)

1. `npm install`
1. `npm run build`
1. copy everything in `dist/index.js`
1. create new gas on script.google.com, pasete above code
1. choose main & execute

## reproduce steps(precise)
### on local

1. `npm install`
1. `npm run clasp login`
1. `mkdir dist`
1. `npm run clasp create --title new-project-name --rootDir ./dist`
   - choose standalone when asked
1. `mv dist/.clasp.json .clasp.json`
1. `mv dist/appsscript.json appsscript.json`
1. `npm run build`
1. `npm run clasp push`
1. `npm run clasp open`

### on GAS

1. choose main
1. execute