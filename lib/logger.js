import debug from 'debug';

const appName = 'website-scraper-puppeteer';
const logLevels = ['error', 'warn', 'info', 'debug', 'log'];

const logger = {};
logLevels.forEach(logLevel => {
	logger[logLevel] = debug(`${appName}:${logLevel}`);
});

export default logger;
