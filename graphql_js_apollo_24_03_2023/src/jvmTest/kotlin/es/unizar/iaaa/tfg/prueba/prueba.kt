package es.unizar.iaaa.tfg.prueba


import es.unizar.iaaa.tfg.constants.ConstantValues
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter


@SpringBootTest
class Prueba {



    @Test
    fun `temporal amount`() {

        val d = LocalDateTime.parse("2023-03-17T20:46:12+02:00", DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'+'SS:ss"))
        println("LOCAL DT: $d")
    }


}
