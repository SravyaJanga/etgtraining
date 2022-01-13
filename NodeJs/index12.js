const Logger = require('./logger_demo');
const logger = new Logger();

logger.on('message',(data)=> console.log('called listener',data));

logger.log('Hello World');