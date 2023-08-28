package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import kotlin.String
import kotlin.collections.List

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class Catalog(
  @JsonProperty("id")
  public override val id: String,
  @JsonProperty("title")
  public override val title: String,
  @JsonProperty("resources")
  public val resources: List<ResourceInCatalog>? = null,
  @JsonProperty("datasets")
  public val datasets: List<DatasetInCatalog>? = null,
  @JsonProperty("services")
  public val services: List<DataService>? = null,
  @JsonProperty("catalogs")
  public val catalogs: List<Catalog>? = null,
  @JsonProperty("records")
  public val records: List<CatalogRecord>? = null,
) : ResourceInCatalog, DatasetInCatalog, AbstractDataset, Resource {
  public companion object
}
