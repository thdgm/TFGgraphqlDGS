package es.unizar.iaaa.tfg.prueba


import es.unizar.iaaa.tfg.constants.ConstantValues
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import java.time.LocalDateTime
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter


@SpringBootTest
class Prueba {



    @Test
    fun `temporal amount`() {

        //val d = ZonedDateTime.parse("2023-03-17T20:46:12+02:00")
        val d = LocalDateTime.parse("2023-02-20T11:30:49+01:00",DateTimeFormatter.ISO_OFFSET_DATE_TIME)
        println("LOCAL DT: $d")
    }


}
