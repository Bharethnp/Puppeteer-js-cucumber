const reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber/report/cucumber_report.json',
    output: 'cucumber/report/cucumber_report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    scenarioTimestamp: true
};

reporter.generate(options);