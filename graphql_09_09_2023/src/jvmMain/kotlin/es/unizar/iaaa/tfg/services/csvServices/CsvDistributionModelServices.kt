package es.unizar.iaaa.tfg.services.csvServices


import es.unizar.iaaa.tfg.constants.MediaTypeMap
import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.csvDataModels.DatasetCSVModel
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.services.mutationServices.CreateAuxiliarEntitiesServices
import es.unizar.iaaa.tfg.services.mutationServices.CreateRelationsBetweenEntitiesServices
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*

/*
 * These services help to create a DistributionEntity and its relationships
 * with other entities.
 */

interface CsvDistributionModelServices {
    fun createDistribution(d: DatasetCSVModel, dServ: DataServiceEntity):Collection<DistributionEntity>
}

@Service

class CsvDistributionModelServicesImpl(

    private val distributionRepository: DistributionRepository,
    private val createRelationsBetweenEntitiesServices: CreateRelationsBetweenEntitiesServices,
    private val createAuxiliarEntitiesServices: CreateAuxiliarEntitiesServices,

    ) : CsvDistributionModelServices {

    override fun createDistribution(d: DatasetCSVModel, dServ: DataServiceEntity):Collection<DistributionEntity>{
        val distributions = mutableListOf<DistributionEntity>()
        val regex = Regex("\\..*\\.|\\.\\d{3}")
        val regexMultiDots = Regex("\\d+\\.\\d+\\.\\d+")
        if (!d.distributions.isNullOrEmpty()){
            println("NUMBERRRR:::: ${d.distributions.size}")
            d.distributions.forEachIndexed { index,distributionMap ->
                val newDistribution = DistributionEntity()
                newDistribution.id = if (d.url != null) UUID.nameUUIDFromBytes((d.url+"/distribution$index")
                    .toByteArray()).toString() else UUID.randomUUID().toString()
                val accessUrl = distributionMap?.get("ACCESS_URL")
                if (accessUrl != null) newDistribution.accessUrl = accessUrl


                val bytesNum = distributionMap?.get("BYTE_SIZE")
                var bytesSize = bytesNum?.replace("([0-9,.]+)([A-Za-z]{2})".toRegex(),"$1 $2")?.split(" ") ?: listOf("0")

                var newBytesNum = if (bytesSize?.elementAt(0) != null){
                    if(bytesSize.size > 1){
                        if (regexMultiDots.containsMatchIn(bytesSize.elementAt(0))){
                            bytesSize.elementAt(0).replace(".","")
                        }else{
                            bytesSize.elementAt(0)
                        }
                    }else{
                         bytesSize.elementAt(0).replace(".","")
                    }
                }else{
                    "0"
                }

                val byteSize = if(bytesSize!!.size > 1){
                    when(bytesSize?.elementAt(1)?.toUpperCase()){
                        "KB" -> toBytes(newBytesNum.replace(",",".")?.toDouble()?: 0.0, 1.0)
                        "MB" -> toBytes(newBytesNum.replace(",",".")?.toDouble()?: 0.0, 2.0)
                        "GB" -> toBytes(newBytesNum.replace(",",".")?.toDouble()?: 0.0, 3.0)
                        "TB" -> toBytes(newBytesNum.replace(",",".")?.toDouble()?: 0.0, 4.0)
                        "PB" -> toBytes(newBytesNum.replace(",",".")?.toDouble()?: 0.0, 5.0)
                        "EB" -> toBytes(newBytesNum.replace(",",".")?.toDouble()?: 0.0, 6.0)
                        "ZB" -> toBytes(newBytesNum.replace(",",".")?.toDouble()?: 0.0, 7.0)
                        "YB" -> toBytes(newBytesNum.replace(",",".")?.toDouble()?: 0.0, 8.0)
                        else -> toBytes(newBytesNum.replace(",",".")?.toDouble()?: 0.0, 0.0)
                    }
                }else{
                    toBytes(newBytesNum?.replace(",",".")?.toDouble()?: 0.0, 0.0)
                }
                if (byteSize != null) newDistribution.byteSize = byteSize
                val format = distributionMap?.get("MEDIA_TYPE")
                if (format != null) newDistribution.format = MediaTypeMap.MEDIA_TYPE[".$format".toLowerCase()]
                val titles = distributionMap?.filterKeys { it.matches("^TITLE.*".toRegex())}?.values
                println("------------------------------------------------------------------")
                println("------------------------------------------------------------------")
                println("------------------------------------------------------------------")
                println("------------------------------------------------------------------")
                println(newDistribution)
                println("------------------------------------------------------------------")
                println("------------------------------------------------------------------")
                println("------------------------------------------------------------------")
                println("${newDistribution.id} -- ${newDistribution.format} -- ${newDistribution.byteSize} -- ${newDistribution.accessUrl}")
                println("------------------------------------------------------------------")
                println("------------------------------------------------------------------")
                println("------------------------------------------------------------------")
                println(titles)
                if (!distributionRepository.existsById(newDistribution.id)) distributionRepository.save(newDistribution)
                println("SAVEEE1")
                createRelationsBetweenEntitiesServices.insertIntoAccessInServicefromCsv(newDistribution, dServ)
                println("SAVEEE2")
                if (titles != null) createAuxiliarEntitiesServices.createTitleFromCsv(titles, newDistribution)
                println("SAVEEE3")
                distributions.add(newDistribution)
                println("SAVEEE4")
            }
        }
        return distributions
    }

    fun toBytes(value: Double, exp: Double): Double =
        value * Math.pow(1024.0, exp).toDouble()


}

