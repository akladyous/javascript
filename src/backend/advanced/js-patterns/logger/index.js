// import Singleton from "./logger.js";

import logger from "./logger.js"

// const logger = new Singleton().getInstance()
logger.log('test 1')
logger.log('test 2')
logger.log('test 3')
console.log(logger.count())
