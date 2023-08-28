package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import kotlin.String
import kotlin.collections.List

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class Dataset(
  @JsonProperty("id")
  public override val id: String,
  @JsonProperty("title")
  public override val title: String,
  @JsonProperty("inSeries")
  public val inSeries: List<DatasetSeries>? = null,
  @JsonProperty("distributions")
  public val distributions: List<Distribution>? = null,
  @JsonProperty("description")
  public override val description: List<ResourceDescription>? = null,
  @JsonProperty("language")
  public override val language: List<String>? = null,
  @JsonProperty("fechaHoraCreacion")
  public override val fechaHoraCreacion: FechaHora,
  @JsonProperty("ultimaModificacion")
  public override val ultimaModificacion: FechaHora,
) : ResourceInCatalog, DatasetInCatalog, AbstractDataset, Resource {
  public companion object
}
