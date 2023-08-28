package es.unizar.iaaa.tfg.controller

import org.springframework.http.HttpStatus
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseStatus
import java.io.FileNotFoundException

@ControllerAdvice
class ExceptionController {

    @ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "File could not be found")
    @ExceptionHandler(FileNotFoundException::class)
    fun fileNotFound(exception: FileNotFoundException) {}
}