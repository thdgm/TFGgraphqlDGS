package es.unizar.iaaa.tfg.services.queryAuxiliarServices

import com.graphqlDGS.graphqlDGS.model.types.Distribution
import com.graphqlDGS.graphqlDGS.model.types.MapInput
import com.graphqlDGS.graphqlDGS.model.types.Resource
import es.unizar.iaaa.tfg.constants.ConstantValues.PERIODICITY_RANGE
import es.unizar.iaaa.tfg.constants.MediaTypeMap
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import es.unizar.iaaa.tfg.repository.DatasetRepository
import es.unizar.iaaa.tfg.repository.DistributionRepository
import es.unizar.iaaa.tfg.repository.KeywordRepository
import es.unizar.iaaa.tfg.repository.ResourceRepository
import es.unizar.iaaa.tfg.repository.ResourceRepositoryCriteria
import es.unizar.iaaa.tfg.repository.ResourceRepositoryExtra
import es.unizar.iaaa.tfg.repository.ThemeRepository
import es.unizar.iaaa.tfg.services.converts.ConvertersAuxiliarEntitiesTo
import es.unizar.iaaa.tfg.services.converts.ConvertersResourcesEntitiesTo
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Service
import java.time.LocalDateTime

interface ResourcesByFilterServices {

    fun getResourcesByFilters(filters: Collection<MapInput>, type: String, page: Int): Collection<Resource>

    fun getDistributionsByFilters(filters: Collection<MapInput>, page: Int): Collection<Distribution>

}

@Service
class ResourcesByFilterServicesImpl(

    private val convertersResourcesEntitiesTo: ConvertersResourcesEntitiesTo,
    private val converterAux: ConvertersAuxiliarEntitiesTo,
    private val repoCriteria: ResourceRepositoryExtra,

    ) : ResourcesByFilterServices {



    fun getDatasetsByFilters(appliedFilters: List<MapInput>, type: String,page: Int,sortBy: String, orderBy: String?): Collection<Resource>{
        //Conversiones de issued, modified y period
        val issued = appliedFilters.find { it.key == "Fecha creación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val modified = appliedFilters.find { it.key == "Fecha última modificación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val period = appliedFilters.find { it.key == "Frecuencia de Actualización"}?.values?.map{converterAux.castFrequencyFilter(it)} ?: listOf()
        val notation = appliedFilters.find { it.key == "Nivel de Administración"}?.values?.map{"${converterAux.getAdministrationLevel(it)}%"} ?: listOf()

        val startEnd = appliedFilters.find { it.key == "Frecuencia de Actualización" }?.values
        var start: LocalDateTime? = null
        var end:LocalDateTime? = null
        if (!startEnd.isNullOrEmpty()){
            start = if (startEnd.first().split("--").first().trim() != ""){
                converterAux.toLocalDateTime(startEnd.first().split("--").first().trim())
            } else null
            end = if (startEnd.first().split("--").last().trim() != ""){
                converterAux.toLocalDateTime(startEnd.first().split("--").last().trim())
            } else null
        }

        val res = repoCriteria.findDatasetsByFilters(appliedFilters,type,orderBy?.toUpperCase() ?: "ASC",sortBy,page,issued, modified, period, notation, start, end) //resRepo.getResources(appliedFilters,type,page, issued, modified, period, notation).map { convertersResourcesEntitiesTo.createResource(it) }.distinct()
        return res?.map { convertersResourcesEntitiesTo.createResource(it) }?.distinct() ?: listOf()
    }

    fun getCatalogsByFilters(appliedFilters: List<MapInput>, type: String,page: Int, sortBy: String, orderBy: String?): Collection<Resource>{
        //Conversiones de issued, modified y period

        val issued = appliedFilters.find { it.key == "Fecha creación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val modified = appliedFilters.find { it.key == "Fecha última modificación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val notation = appliedFilters.find { it.key == "Nivel de administración"}?.values?.map{"${converterAux.getAdministrationLevel(it)}%"} ?: listOf()
        var numberOfResources: String? = if (appliedFilters.find { it.key == "Número de recursos"}?.values?.isNotEmpty() == true) appliedFilters.find { it.key == "Número de recursos"}?.values?.first() else null
        var rangeNumber: Pair<String, String>? = null
        if (numberOfResources != null){
            rangeNumber = when(numberOfResources){
                "Ningún recurso" -> Pair("0","0")
                "Menos de 100" -> Pair("0","100")
                "Entre 100 y 1000" -> Pair("100","1000")
                "Entre 1000 y 10.000" -> Pair("1000","10000")
                "Más de 10.000" -> Pair("10000","9999999")
                else -> null
            }
        }

        val res = repoCriteria.findCatalogsByFilters(appliedFilters,type,orderBy?.toUpperCase() ?: "ASC",sortBy,page,issued, modified, notation,rangeNumber) //resRepo.getResources(appliedFilters,type,page, issued, modified, period, notation).map { convertersResourcesEntitiesTo.createResource(it) }.distinct()
        return res?.map { convertersResourcesEntitiesTo.createResource(it) }?.distinct() ?: listOf()
    }

    fun getServicesByFilters(appliedFilters: List<MapInput>, type: String,page: Int, sortBy: String, orderBy: String?): Collection<Resource>{
        val issued = appliedFilters.find { it.key == "Fecha creación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val modified = appliedFilters.find { it.key == "Fecha última modificación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val notation = appliedFilters.find { it.key == "Nivel de administración"}?.values?.map{"${converterAux.getAdministrationLevel(it)}%"} ?: listOf()
        var numberOfResources: String? = if (appliedFilters.find { it.key == "Número de recursos"}?.values?.isNotEmpty() == true) appliedFilters.find { it.key == "Número de recursos"}?.values?.first() else null
        var rangeNumber: Pair<String, String>? = null
        if (numberOfResources != null){
            rangeNumber = when(numberOfResources){
                "Ningún recurso" -> Pair("0","0")
                "Menos de 100" -> Pair("0","100")
                "Entre 100 y 1000" -> Pair("100","1000")
                "Entre 1000 y 10.000" -> Pair("1000","10000")
                "Más de 10.000" -> Pair("10000","9999999")
                else -> null
            }
        }

        val res = repoCriteria.findServicesByFilters(appliedFilters,type,orderBy?.toUpperCase() ?: "ASC",sortBy,page,issued, modified, notation,rangeNumber) //resRepo.getResources(appliedFilters,type,page, issued, modified, period, notation).map { convertersResourcesEntitiesTo.createResource(it) }.distinct()
        return res?.map { convertersResourcesEntitiesTo.createResource(it) }?.distinct() ?: listOf()
    }
    fun getSeriesByFilters(appliedFilters: List<MapInput>, type: String,page: Int, sortBy: String, orderBy: String?): Collection<Resource>{
        val issued = appliedFilters.find { it.key == "Fecha creación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val modified = appliedFilters.find { it.key == "Fecha última modificación"}?.values?.map{converterAux.toLocalDateTime(it)} ?: listOf()
        val notation = appliedFilters.find { it.key == "Nivel de administración"}?.values?.map{"${converterAux.getAdministrationLevel(it)}%"} ?: listOf()
        var numberOfResources: String? = if (appliedFilters.find { it.key == "Número de datasets"}?.values?.isNotEmpty() == true) appliedFilters.find { it.key == "Número de datasets"}?.values?.first() else null
        println("A VER EL NUMERO DE DATASETSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS $appliedFilters")
        println(numberOfResources)
        var rangeNumber: Pair<String, String>? = null
        if (numberOfResources != null){
            rangeNumber = when(numberOfResources){
                "Ningún recurso" -> Pair("0","0")
                "Menos de 100" -> Pair("0","100")
                "Entre 100 y 1000" -> Pair("100","1000")
                "Entre 1000 y 10.000" -> Pair("1000","10000")
                "Más de 10.000" -> Pair("10000","9999999")
                "Ningún dataset" -> Pair("0","0")
                else -> null
            }
        }

        val res = repoCriteria.findSeriesByFilters(appliedFilters,type,orderBy?.toUpperCase() ?: "ASC",sortBy,page,issued, modified, notation,rangeNumber) //resRepo.getResources(appliedFilters,type,page, issued, modified, period, notation).map { convertersResourcesEntitiesTo.createResource(it) }.distinct()
        return res?.map { convertersResourcesEntitiesTo.createResource(it) }?.distinct() ?: listOf()
    }
    override fun getResourcesByFilters(filters: Collection<MapInput>, type: String,page: Int): Collection<Resource>{
        val orderBy = filters.firstOrNull { it.key == "OrderBy" }?.values?.firstOrNull()
        var sortBy = filters.firstOrNull { it.key == "SortBy" }?.values?.firstOrNull()

        var appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }
        sortBy = when(sortBy){
            "issued" -> {"issued"}
            "modified" -> {"modified"}
            "notation" -> {"publisher_id"}
            else ->{"id"}
        }
        return when (type){
            "dataset" -> getDatasetsByFilters(appliedFilters, type, page,sortBy,orderBy)
            "catalog" -> getCatalogsByFilters(appliedFilters, type, page,sortBy,orderBy)
            "data_service" -> getServicesByFilters(appliedFilters, type, page,sortBy,orderBy)
            "dataset_series" -> getSeriesByFilters(appliedFilters, type, page,sortBy,orderBy)
            else -> emptyList()
        }

    }


    override fun getDistributionsByFilters(filters: Collection<MapInput>, page: Int): Collection<Distribution> {
        val orderBy = filters.firstOrNull { it.key == "OrderBy" }?.values?.firstOrNull()
        var sortBy = filters.firstOrNull { it.key == "SortBy" }?.values?.firstOrNull()
        var appliedFilters = filters.filter { it.key != "Page" &&  it.key != "OrderBy" && it.key != "SortBy" }
        sortBy = when(sortBy){
            "format" -> {"format"}
            "byte_size" -> {"byte_size"}
            "access_url" -> {"access_url"}
            else ->{"byte_size "}
        }
        val mediaTypeMap = MediaTypeMap.MEDIA_TYPE
        val formats_pre = appliedFilters.find { it.key == "Formato" }?.values ?: listOf()
        val formats = formats_pre.mapNotNull { mediaTypeMap[it] }
        var byteSize: String? = if (appliedFilters.find { it.key == "ByteSize"}?.values?.isNotEmpty() == true) appliedFilters.find { it.key == "ByteSize"}?.values?.first() else null
        var rangeNumber: Pair<String, String>? = null
        if (byteSize != null){
            rangeNumber = when(byteSize){
                "0 Bytes" -> Pair("0","0")
                "Entre 1 y 100 bytes" -> Pair("1","100")
                "Entre 100 y 1000 bytes" -> Pair("100","1000")
                "Entre 1000 y 10.000 bytes" -> Pair("1000","10000")
                "Entre 10.000 y 100.000 bytes" -> Pair("10000","100000")
                "Más de 100.000 bytes" -> Pair("100000","9999999")
                else -> {
                    if (byteSize.toIntOrNull() != null) Pair(byteSize,byteSize)
                    else null
                }
            }
        }
        println("RESSSSSSSSSSS1::::::::::---------------------------------------------------------------------------------: $rangeNumber - $formats")
        val res = repoCriteria.findDistributionsByFilters(appliedFilters,orderBy?.toUpperCase() ?: "ASC",sortBy,page,rangeNumber,formats) //resRepo.getResources(appliedFilters,type,page, issued, modified, period, notation).map { convertersResourcesEntitiesTo.createResource(it) }.distinct()
        println("QEURRYYYYYYYYYYYYYYYYY RESSSS:::::::::::::::::::---------------------------- $res")

        return res?.map { convertersResourcesEntitiesTo.toDistribution(it) }?.distinct()?.filterNotNull() ?: listOf()
    }

}
