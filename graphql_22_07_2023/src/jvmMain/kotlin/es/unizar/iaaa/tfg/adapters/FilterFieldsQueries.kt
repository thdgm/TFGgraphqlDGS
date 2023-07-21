package es.unizar.iaaa.tfg.adapters

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import es.unizar.iaaa.tfg.services.queryAuxiliarServices.FieldsFilterServices

@DgsComponent
class FilterFieldsQueries(
    private val fieldsFilterServices: FieldsFilterServices,
    ) {

    // @DgsQuery getAllThemes: returns all existing themes without duplicates
    @DgsQuery
    fun getAllThemes(@InputArgument page: Int, @InputArgument pageSize: Int): Collection<String> =
        fieldsFilterServices.getThemes(page,pageSize)


    // @DgsQuery getAllKeywords: returns all existing keywords with particular language without duplicates
    @DgsQuery
    fun getAllKeywords(@InputArgument page: Int, @InputArgument pageSize: Int): Collection<String> =
        fieldsFilterServices.getKeywords(page,pageSize)


    // @DgsQuery getAllPublishers: returns all existing publisher's labels without duplicates
    @DgsQuery
    fun getAllPublishers(@InputArgument page: Int, @InputArgument pageSize: Int): Collection<String> =
        fieldsFilterServices.getPublishersLabel(page,pageSize)


    // @DgsQuery getAllFrequencies: returns all existing frequency's ranges without duplicates
    @DgsQuery
    fun getAllFrequencies(@InputArgument page: Int, @InputArgument pageSize: Int): Collection<String?> =
        fieldsFilterServices.getFrequenciesRanges(page,pageSize)


    // @DgsQuery getAllAdminLabel: returns all existing administration's labels without duplicates
    @DgsQuery
    fun getAllAdminLabel(@InputArgument page: Int, @InputArgument pageSize: Int): Collection<String?> =
        fieldsFilterServices.getAdmonLevel(page,pageSize)

    // @DgsQuery getAllFormats: returns all existing formats without duplicates
    @DgsQuery
    fun getAllFormats(@InputArgument page: Int, @InputArgument pageSize: Int): Collection<String> =
        fieldsFilterServices.getFormats(page,pageSize)

}
