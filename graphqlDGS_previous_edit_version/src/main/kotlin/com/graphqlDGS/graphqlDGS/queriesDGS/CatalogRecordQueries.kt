package com.graphqlDGS.graphqlDGS.queriesDGS

import com.graphqlDGS.graphqlDGS.initget.InitService
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecords
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument

@DgsComponent
class CatalogRecordQueries(
    private val initService: InitService
) {
    // @DgsQuery catalogRecord: returns the catalogRecord which id is the @InputArgument id
    @DgsQuery
    fun catalogRecord(@InputArgument id: String?): CatalogRecords? {
        if (id == null) {
            return null
        }
        return initService.showCatalogRecords().firstOrNull { it?.id == id }
    }
}
