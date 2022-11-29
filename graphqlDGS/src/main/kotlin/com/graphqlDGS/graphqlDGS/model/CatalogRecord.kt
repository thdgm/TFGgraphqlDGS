package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import kotlin.String

public data class CatalogRecord(
    @JsonProperty("id") public val id: String,
    @JsonProperty("title") public val title: String,
    @JsonProperty("primaryTopic") public var primaryTopic: ResourceInCatalog?,
) {
  public companion object
}
 