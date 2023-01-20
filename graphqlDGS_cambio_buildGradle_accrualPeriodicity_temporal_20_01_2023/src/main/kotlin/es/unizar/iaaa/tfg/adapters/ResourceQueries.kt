package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.*
import com.netflix.graphql.dgs.*
import es.unizar.iaaa.tfg.services.ResourceServices

@DgsComponent
class ResourceQueries(
    private val resourceServices: ResourceServices,

) {

    // @DgsQuery resource: returns the resource which id is the @InputArgument id
    @DgsQuery
    fun resource(@InputArgument id: String?): Resource? {
        if (id == null) {
            return null
        }
        return resourceServices.showResources(id)
    }

    // @DgsData description: Devuelve lista de las descripciones del resource junto con el lenguaje en el que está escrita
    @DgsData(parentType = "Resource")
    fun description(dfe: DgsDataFetchingEnvironment): Collection<ResourceDescription?> {
        val res: Resource? = dfe.getSource()
        return resourceServices.getDescriptions(res!!.id)
    }

    // @DgsData language: Devuelve lista de los lenguajes empleados en el resource
    @DgsData(parentType = "Resource")
    fun language(dfe: DgsDataFetchingEnvironment): Collection<String?> {
        val res: Resource? = dfe.getSource()
        return resourceServices.getLanguages(res!!.id)
    }

    // @DgsData language: Devuelve lista de los lenguajes empleados en el resource
    @DgsData(parentType = "Resource")
    fun fechaHoraCreacion(dfe: DgsDataFetchingEnvironment): FechaHora? {
        val res: Resource? = dfe.getSource()
        return resourceServices.getCreacion(res!!.id)
    }

    // @DgsData language: Devuelve lista de los lenguajes empleados en el resource
    @DgsData(parentType = "Resource")
    fun ultimaModificacion(dfe: DgsDataFetchingEnvironment): FechaHora? {
        val res: Resource? = dfe.getSource()
        return resourceServices.getModificacion(res!!.id)
    }
}
