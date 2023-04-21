package es.unizar.iaaa.tfg.jsonDataModels

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

/*
 * This data class helps to process the csv file recording all its metadata.
 */
data class DatasetCSVModel(
    val url: String?,
    val identifier: String?,
    val title: Collection<String>,
    val description: Collection<String>, //lang-text
    val themes: Collection<String>,
    val keywords: Map<String,String>?, // {es=Alemania//España, en=Spain//Germany}
    val issued: LocalDateTime?,
    val modified: LocalDateTime?,
    val frequency: String?, // AccrualPeriodicity p.e days, 2
    val languages: Collection<String>,
    val publisher: String?,
    val license: String?,
    val spatial: String?,
    val period: Pair<LocalDateTime, LocalDateTime>?, //Start-end
    val validity: LocalDateTime?, // No está en el modelo
    val relatedResources: String?, //No está en el modelo
    val regulations: String?, // No está en el modelo Es la Normativa
    val distributions: Collection<Map<String,String>?>?,

    ){

    override fun toString(): String{
        return "${this.url} [split] " +
                "${this.identifier} [split] " +
                "${this.title} [split] ".replace(",\\s+([a-z]{2}\\-)".toRegex(),"[SPLIT]\$1") +
                "${this.description} [split] ".replace(",\\s+([a-z]{2}\\-)".toRegex(),"[SPLIT]\$1")+
                "${this.themes} [split] " +
                "${this.keywords} [split] " +
                "${this.issued} [split] " +
                "${this.modified} [split] " +
                "${this.frequency} [split] " +
                "${this.languages} [split] " +
                "${this.publisher} [split] " +
                "${this.license} [split] " +
                "${this.spatial} [split] " +
                "${this.period} [split] " +
                "${this.validity} [split] " +
                "${this.relatedResources} [split] " +
                "${this.regulations} [split] " +
                "${this.distributions} [split] "

    }
    fun fromString(): DatasetCSVModel{

        val m = this.toString().split("[split]")

        println("ESTOO1 ${m.elementAt(17).trim().substring(2,(m.elementAt(17).trim().length)-1).split("}").elementAt(1).replace(", {", "")}")
        println("FILTER ${m.elementAt(17).trim().substring(2,(m.elementAt(17).trim().length)-1)}")

        return DatasetCSVModel(
            if (m.elementAt(0).trim() == "null") null else m.elementAt(0).trim(),
            if (m.elementAt(1).trim() == "null") null else m.elementAt(1).trim(),
            if (m.elementAt(2).isNotEmpty() && m.elementAt(2).trim() != "null"){
                m.elementAt(2).trim().substring(1,(m.elementAt(2).trim().length)-1).split(",").map{
                    it.trim()
                }
            } else emptyList(),
            if (m.elementAt(3).isNotEmpty() && m.elementAt(3).trim() != "null"){
                m.elementAt(3).trim().substring(1,(m.elementAt(3).trim().length)-1).split(",").map{it.trim()}
            } else emptyList(),
            if (m.elementAt(4).isNotEmpty() && m.elementAt(4).trim() != "null"){
                m.elementAt(4).trim().substring(1,(m.elementAt(4).trim().length)-1).split(",").map{it.trim()}
            } else emptyList(),
            if (!m.elementAt(5).isNullOrEmpty() && m.elementAt(5).trim() != "null") {
                m.elementAt(5).trim().substring(1,(m.elementAt(5).trim().length)-1).split(",").associate {
                    val (left, right) = it.split("=")
                    left.trim() to right.trim()
                }
            }else {
                null
            },

            if (!m.elementAt(6).isNullOrBlank() && m.elementAt(6).trim() != "null"){
                LocalDateTime.parse( m.elementAt(6).trim(),DateTimeFormatter.ISO_LOCAL_DATE_TIME)
            }else{
                null
            },
            if (!m.elementAt(7).isNullOrBlank() && m.elementAt(7).trim() != "null"){
                LocalDateTime.parse( m.elementAt(7).trim(),DateTimeFormatter.ISO_LOCAL_DATE_TIME)
            }else{
                null
            },
            if (m.elementAt(8).trim() == "null") null else m.elementAt(8).trim(),
            if (m.elementAt(9).isNotEmpty() && m.elementAt(9).trim() != "null"){
                m.elementAt(9).trim().substring(1,(m.elementAt(9).trim().length)-1).split(",").map{it.trim()}
            } else emptyList(),
            if (m.elementAt(10).trim() == "null") null else m.elementAt(10).trim(),
            if (m.elementAt(11).trim() == "null") null else m.elementAt(11).trim(),
            if (m.elementAt(12).trim() == "null") null else m.elementAt(12).trim(),
            if (!m.elementAt(13).isNullOrBlank() && m.elementAt(13).trim() != "null"){
                m.elementAt(13).split(",").let{
                    Pair(
                        LocalDateTime.parse( it[0],DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ssZ")),
                        LocalDateTime.parse( it[1],DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ssZ")),
                    )
                }
            } else null,
            if (!m.elementAt(14).isNullOrBlank() && m.elementAt(14).trim() != "null"){
                LocalDateTime.parse( m.elementAt(14),DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ssZ"))
            }else{
                null
            },
            if (!m.elementAt(15).isNullOrBlank() && m.elementAt(15).trim() != "null"){
                m.elementAt(15).trim()
            } else null,
            if (!m.elementAt(16).isNullOrBlank() && m.elementAt(16).trim() != "null"){
                m.elementAt(16).trim()
            } else null,
           if (!m.elementAt(17).isNullOrEmpty() && m.elementAt(17).trim() != "null") {
                m.elementAt(17).trim().substring(2,(m.elementAt(17).trim().length)-1).split("}").map{
                    if (!it.isNullOrBlank()){
                        it.trim().replace(", {", "").split(",").associate {
                            val (left, right) = it.split("=")
                            left.trim() to right.trim()
                        }
                    }else null

                }.filterNotNull()
            } else null,




        )
    }
}

