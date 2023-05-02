package es.unizar.iaaa.tfg.adapters.Custom


class LangStringAdapter : CustomScalarAdapter<commonModels.LangString> {
    override fun encode(value: commonModels.LangString): Any {
        return mapOf("literal" to value.literal, "tag" to value.tag)
    }

    override fun decode(value: Any): commonModels.LangString {
        val map = value as Map<String, Any>
        return commonModels.LangString(literal = map["literal"] as String, tag = map["tag"] as String)
    }
}