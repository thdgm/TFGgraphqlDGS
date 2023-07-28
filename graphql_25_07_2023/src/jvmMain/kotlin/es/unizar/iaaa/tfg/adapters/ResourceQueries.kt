package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.annotations.Concept
import es.unizar.iaaa.tfg.services.queryServices.CatalogRecordsServices
import es.unizar.iaaa.tfg.services.queryAuxiliarServices.ReferenceWithinExternalContextServices
import es.unizar.iaaa.tfg.services.queryServices.ResourceServices
import java.time.LocalDateTime

/*
 * Query Graphql implementation. Here there are the different fields of Resource type.
 * For one another, we call different services which return the corresponding type value.
 */
@DgsComponent
class ResourceQueries(
    private val resourceServices: ResourceServices,
    private val catalogRecordsServices: CatalogRecordsServices,
    private val referenceWithinExternalContextServices: ReferenceWithinExternalContextServices,


    ) {

    // @DgsQuery resource: returns the resource which id is the @InputArgument id
    @DgsQuery
    fun resource(@InputArgument id: String?,@InputArgument isDataset: Boolean,@InputArgument isCatalog: Boolean,@InputArgument page: Int): Resource? {
        if (id == null) {
            return null
        }
        return resourceServices.getResources(id)
    }

    // @DgsData title: Returns title list of resource with their language
    @DgsData(parentType = "Resource")
    fun title(dfe: DgsDataFetchingEnvironment): Collection<LangString?> {
        val res: Resource = dfe.getSource()
        println("TIIIIIITTLEEEE::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ${res.id}")
        return resourceServices.getTitles(res.id)
    }

    // @DgsData description: Returns descriptions list of resource with their language
    @DgsData(parentType = "Resource")
    fun description(dfe: DgsDataFetchingEnvironment): Collection<LangString?> {
        val res: Resource = dfe.getSource()

        return resourceServices.getDescriptions(res.id)
    }

    // @DgsData language: Returns language list of resource
    @DgsData(parentType = "Resource")
    fun language(dfe: DgsDataFetchingEnvironment): Collection<String?> {
        val res: Resource = dfe.getSource()
        return resourceServices.getLanguages(res.id)
    }

    // @DgsData issued: returns LocalDateTime of resource's creation
    @DgsData(parentType = "Resource")
    fun issued(dfe: DgsDataFetchingEnvironment): LocalDateTime? {
        val res: Resource = dfe.getSource()
        return resourceServices.getCreacion(res.id)
    }

    // @DgsData modified: returns LocalDateTime of resource's last modification
    @DgsData(parentType = "Resource")
    fun modified(dfe: DgsDataFetchingEnvironment): LocalDateTime? {
        val res: Resource = dfe.getSource()
        return resourceServices.getModificacion(res.id)
    }

    // @DgsQuery inCatalog: returns the inverse of resources property of catalog
    @DgsData(parentType = "Resource")
    fun inCatalog(filter: String?, dfe: DgsDataFetchingEnvironment): Collection<Catalog?> {
        val res: Resource = dfe.getSource()
        return resourceServices.getCatalogOfResource(filter, res.id)
    }

    // @DgsQuery isPrimaryTopicOf: returns the inverse of primaryTopic property of CatalogRecord
    @DgsData(parentType = "Resource")
    fun isPrimaryTopicOf(filter: String?, dfe: DgsDataFetchingEnvironment): Collection<CatalogRecord?> {
        val res: Resource = dfe.getSource()
        return catalogRecordsServices.getCatalogsRecordOf(filter, res.id)
    }

    // @DgsQuery theme: returns the theme field of Resource
    @DgsData(parentType = "Resource")
    fun theme(dfe: DgsDataFetchingEnvironment): Collection<String?> {
        val res: Resource = dfe.getSource()
        return resourceServices.getTheme(res.id)
    }

    // @DgsQuery license: returns the license field of Resource
    @DgsData(parentType = "Resource")
    fun license(dfe: DgsDataFetchingEnvironment): String? {
        val res: Resource = dfe.getSource()
        return resourceServices.getLicense(res.id)
    }

    // @DgsQuery publisher: returns the publisher field of Resource
    @DgsData(parentType = "Resource")
    fun publisher(dfe: DgsDataFetchingEnvironment): Concept? {
        val res: Resource = dfe.getSource()
        return resourceServices.getPublisher(res.id)
    }

    // @DgsQuery identifier: returns the identifier+s list field
    @DgsData(parentType = "Resource")
    fun identifier(dfe: DgsDataFetchingEnvironment): Collection<String?> {
        val res: Resource = dfe.getSource()
        return referenceWithinExternalContextServices.getIdentifiers(res)
    }
}
