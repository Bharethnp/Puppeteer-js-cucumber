# Puppeteer-js-cucumber

To run a normal js file -> node filename.js
To run a cucumber file -> ./node_modules/.bin/cucumber-js cucumber/features
To run a cucumber file with report -> ./node_modules/.bin/cucumber-js cucumber/features -f json:cucumber/report/cucumber_report.json
To run a cucumber file with report and include babel -> ./node_modules/.bin/cucumber-js --require-module @babel/register --require-module @babel/polyfill  cucumber/features -f json:cucumber/report/cucumber_report.json