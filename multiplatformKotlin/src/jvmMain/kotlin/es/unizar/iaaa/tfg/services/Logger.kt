package es.unizar.iaaa.tfg.services

import ch.qos.logback.classic.Logger as Logging
import mu.KotlinLogging
import mu.KLogger
import org.springframework.stereotype.Service


interface Logger {
    fun logger():KLogger
}

@Service
class LoggerImpl: Logger {
    private val logger = KotlinLogging.logger {}

    var mu.KLogger.level
        get() = (underlyingLogger as Logging).level
        set(value) { (underlyingLogger as Logging).level = value }

     constructor() {
        //logger.level = Level.DEBUG
    }
    override fun logger(): KLogger {
        return this.logger
    }


}