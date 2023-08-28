package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import kotlin.String
import kotlin.collections.List

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class DatasetSeries(
  @JsonProperty("id")
  public override val id: String,
  @JsonProperty("title")
  public override val title: String,
  @JsonProperty("description")
  public override val description: List<ResourceDescription>? = null,
  @JsonProperty("language")
  public override val language: List<String>? = null,
  @JsonProperty("seriesMembers")
  public val seriesMembers: List<Dataset>? = null,
  @JsonProperty("fechaHoraCreacion")
  public override val fechaHoraCreacion: FechaHora? = null,
  @JsonProperty("ultimaModificacion")
  public override val ultimaModificacion: FechaHora? = null,
  @JsonProperty("inCatalog")
  public override val inCatalog: List<Catalog>? = null,
  @JsonProperty("isPrimaryTopicOf")
  public override val isPrimaryTopicOf: List<CatalogRecord>? = null,
) : ResourceInCatalog, DatasetInCatalog, AbstractDataset, Resource {
  public companion object
}
