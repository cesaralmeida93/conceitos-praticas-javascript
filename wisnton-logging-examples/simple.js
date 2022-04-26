const winston = require('winston');


const logger = winston.createLogger({
    level: 'http',
    transports: [
        new winston.transports.Console()
    ]
});

logger.error('Error message');
logger.warn('Warning message');
logger.info('Information message');
logger.log('verbose', 'Verbose message')
logger.http('http message');
logger.verbose('verbose message');
logger.debug('debug message');
logger.silly('silly message');
