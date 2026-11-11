const logger = require('./logger.cjs')
const date = new Date()

logger.info(`${date} Aplicacion iniciada`)
logger.warn(`${date} Memoria disponible baja`)
logger.error(`${date} No se pudo conectar con el servidor`)
logger.debug(`${date} Ejecutando funcion principal`)
