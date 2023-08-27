package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.MapInput
import com.graphqlDGS.graphqlDGS.model.types.PublisherOutput
import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.services.queryAuxiliarServices.PublisherServices
import es.unizar.iaaa.tfg.services.queryServices.ResourceServices
@DgsComponent
class PublisherQuery(
    private val publisherServices: PublisherServices,
){
    // @DgsQuery resource: returns the publisher info according to notation or label
    @DgsQuery
    fun publisher(@InputArgument notation: String?, @InputArgument label: String?): PublisherOutput? {
        println("PUBLISHERRRRRRRR::::::::::::::: $notation")
        if (label == null && notation == null) return null

        return publisherServices.getPublisherInfo(notation,label)
    }

    // @DgsData resources: Returns resources published by publisher notation
    @DgsData(parentType = "PublisherOutput")
    fun resources(dfe: DgsDataFetchingEnvironment, @InputArgument page: Int): Collection<Resource?> {
        val pub: PublisherOutput = dfe.getSource()

        return publisherServices.getResources(pub.notation, page)
    }
}
