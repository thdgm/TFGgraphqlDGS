package commonModels

import com.apollographql.apollo3.api.Adapter
import com.apollographql.apollo3.api.CustomScalarAdapters
import com.apollographql.apollo3.api.json.JsonReader
import com.apollographql.apollo3.api.json.JsonWriter


class ConceptAdapterScalar(val notation: String, val label: String)

val conceptAdapter = object : Adapter<ConceptAdapterScalar> {

    override fun fromJson(reader: JsonReader, customScalarAdapters: CustomScalarAdapters): ConceptAdapterScalar {

        var notation: String? = null

        var label: String? = null

        reader.beginObject()

        while(reader.hasNext()) {

            when (reader.nextName()) {

                    "notation" -> notation = reader.nextString()

                    "label" -> label = reader.nextString()

            }

        }

        reader.endObject()



        // fromJson can throw on unexpected data and the exception will be wrapped in a

        // ApolloParseException

        return ConceptAdapterScalar(notation!!, label!!)

    }

    // If you do not expect your scalar to be used as input, you can leave this method as TODO()

    override fun toJson(writer: JsonWriter, customScalarAdapters: CustomScalarAdapters, value: ConceptAdapterScalar) {

        writer.beginObject()

        writer.name("notation").value(value.notation)

        writer.name("label").value(value.label)

        writer.endObject()

    }

}