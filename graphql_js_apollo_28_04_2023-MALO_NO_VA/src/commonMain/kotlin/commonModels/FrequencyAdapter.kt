package commonModels

import com.apollographql.apollo3.api.Adapter
import com.apollographql.apollo3.api.CustomScalarAdapters
import com.apollographql.apollo3.api.json.JsonReader
import com.apollographql.apollo3.api.json.JsonWriter


class FrequencyAdapterScalar(val range: String, val period: Float)

val frequencyAdapter = object : Adapter<FrequencyAdapterScalar> {

    override fun fromJson(reader: JsonReader, customScalarAdapters: CustomScalarAdapters): FrequencyAdapterScalar {

        var range: String? = null

        var period: Float? = null

        reader.beginObject()

        while(reader.hasNext()) {

            when (reader.nextName()) {

                    "range" -> range = reader.nextString()

                    "period" -> period = reader.nextDouble().toFloat()

            }

        }

        reader.endObject()



        // fromJson can throw on unexpected data and the exception will be wrapped in a

        // ApolloParseException

        return FrequencyAdapterScalar(range!!, period!!)

    }

    // If you do not expect your scalar to be used as input, you can leave this method as TODO()

    override fun toJson(writer: JsonWriter, customScalarAdapters: CustomScalarAdapters, value: FrequencyAdapterScalar) {

        writer.beginObject()

        writer.name("range").value(value.range)

        writer.name("period").value(value.period.toDouble())

        writer.endObject()

    }

}