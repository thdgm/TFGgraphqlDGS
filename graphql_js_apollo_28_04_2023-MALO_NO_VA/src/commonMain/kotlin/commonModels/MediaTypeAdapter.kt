package commonModels

import com.apollographql.apollo3.api.Adapter
import com.apollographql.apollo3.api.CustomScalarAdapters
import com.apollographql.apollo3.api.json.JsonReader
import com.apollographql.apollo3.api.json.JsonWriter


class MediaTypeAdapterScalar(val type: String, val subtype: String)

val mediaTypeAdapter = object : Adapter<MediaTypeAdapterScalar> {

    override fun fromJson(reader: JsonReader, customScalarAdapters: CustomScalarAdapters): MediaTypeAdapterScalar {

        var type: String? = null

        var subtype: String? = null

        reader.beginObject()

        while(reader.hasNext()) {

            when (reader.nextName()) {

                    "type" -> type = reader.nextString()

                    "subtype" -> subtype = reader.nextString()

            }

        }

        reader.endObject()



        // fromJson can throw on unexpected data and the exception will be wrapped in a

        // ApolloParseException

        return MediaTypeAdapterScalar(type!!, subtype!!)

    }

    // If you do not expect your scalar to be used as input, you can leave this method as TODO()

    override fun toJson(writer: JsonWriter, customScalarAdapters: CustomScalarAdapters, value: MediaTypeAdapterScalar) {

        writer.beginObject()

        writer.name("type").value(value.type)

        writer.name("subtype").value(value.subtype)

        writer.endObject()

    }

}