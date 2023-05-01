package es.unizar.iaaa.tfg.adapters

import com.graphqlDGS.graphqlDGS.model.types.Resource
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.queryAuxiliarServices.FieldsFilterServices
import es.unizar.iaaa.tfg.services.queryAuxiliarServices.ResourcesByFilterServices

@DgsComponent
class FilterFieldsQueries(
    private val fieldsFilterServices: FieldsFilterServices,
    ) {

    // @DgsQuery getAllThemes: returns all existing themes without duplicates
    @DgsQuery
    fun getAllThemes(): Collection<String> =
        fieldsFilterServices.getThemes()


    // @DgsQuery getAllKeywords: returns all existing keywords with particular language without duplicates
    @DgsQuery
    fun getAllKeywords(@InputArgument language: String?): Collection<String> =
        fieldsFilterServices.getKeywords(language)


    // @DgsQuery getAllPublishers: returns all existing publisher's labels without duplicates
    @DgsQuery
    fun getAllPublishers(): Collection<String> =
        fieldsFilterServices.getPublishersLabel()


    // @DgsQuery getAllFrequencies: returns all existing frequency's ranges without duplicates
    @DgsQuery
    fun getAllFrequencies(): Collection<String?> =
        fieldsFilterServices.getFrequenciesRanges()


    // @DgsQuery getAllAdminLabel: returns all existing administration's labels without duplicates
    @DgsQuery
    fun getAllAdminLabel(): Collection<String?> =
        fieldsFilterServices.getAdmonLabel()

    // @DgsQuery getAllFormats: returns all existing formats without duplicates
    @DgsQuery
    fun getAllFormats(): Collection<String?> =
        fieldsFilterServices.getFormats()

}
