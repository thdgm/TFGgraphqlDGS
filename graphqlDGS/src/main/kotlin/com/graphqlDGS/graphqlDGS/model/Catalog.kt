package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import kotlin.String
import kotlin.collections.List

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class Catalog(
    @JsonProperty("id") public override var id: String,
    @JsonProperty("title") public override val title: String,
    @JsonProperty("resources") public var resources: List<ResourceInCatalog>? = null,
    @JsonProperty("datasets") public var datasets: List<DatasetInCatalog>? = null,
    @JsonProperty("services") public var services: List<DataService>? = null,
    @JsonProperty("catalogs") public var catalogs: List<Catalog>? = null,
    @JsonProperty("records") public var records: List<CatalogRecord>? = null,
) : AbstractDataset, ResourceInCatalog, DatasetInCatalog {
    public companion object
}
