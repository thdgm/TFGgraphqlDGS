package commonModels

import com.apollographql.apollo3.api.Adapter
import com.apollographql.apollo3.api.CustomScalarAdapters
import com.apollographql.apollo3.api.json.JsonReader
import com.apollographql.apollo3.api.json.JsonWriter


class LangStringAdapterScalar(val literal: String, val tag: String)

val langStringAdapter = object : Adapter<LangStringAdapterScalar> {

    override fun fromJson(reader: JsonReader, customScalarAdapters: CustomScalarAdapters): LangStringAdapterScalar {

        var literal: String? = null

        var tag: String? = null

        reader.beginObject()

        while(reader.hasNext()) {

            when (reader.nextName()) {

                    "literal" -> literal = reader.nextString()

                    "tag" -> tag = reader.nextString()

            }

        }

        reader.endObject()



        // fromJson can throw on unexpected data and the exception will be wrapped in a

        // ApolloParseException

        return LangStringAdapterScalar(literal!!, tag!!)

    }

    // If you do not expect your scalar to be used as input, you can leave this method as TODO()

    override fun toJson(writer: JsonWriter, customScalarAdapters: CustomScalarAdapters, value: LangStringAdapterScalar) {

        writer.beginObject()

        writer.name("literal").value(value.literal)

        writer.name("tag").value(value.tag)

        writer.endObject()

    }

}