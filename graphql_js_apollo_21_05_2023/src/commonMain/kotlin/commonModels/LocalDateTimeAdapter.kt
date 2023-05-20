package commonModels

import com.apollographql.apollo3.api.Adapter
import com.apollographql.apollo3.api.CustomScalarAdapters
import com.apollographql.apollo3.api.json.JsonReader
import com.apollographql.apollo3.api.json.JsonWriter
//import kotlinx.datetime.LocalDateTime

data class hola(val h : String)
/*
val localDateTimeAdapter = object : Adapter<LocalDateTime?> {

    override fun fromJson(reader: JsonReader, customScalarAdapters: CustomScalarAdapters): LocalDateTime? {

        var dateTime: LocalDateTime? = null


        reader.beginObject()

        while(reader.hasNext()) {

          dateTime = LocalDateTime.parse(reader.nextString()!!)
        }

        reader.endObject()



        // fromJson can throw on unexpected data and the exception will be wrapped in a

        // ApolloParseException

        return dateTime

    }

    // If you do not expect your scalar to be used as input, you can leave this method as TODO()

    override fun toJson(writer: JsonWriter, customScalarAdapters: CustomScalarAdapters, value: LocalDateTime?) {

        writer.beginObject()
        writer.value(value.toString())
        writer.endObject()

    }

}*/