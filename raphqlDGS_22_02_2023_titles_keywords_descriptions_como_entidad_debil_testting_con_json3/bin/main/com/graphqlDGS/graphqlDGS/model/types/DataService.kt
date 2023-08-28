package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import es.unizar.iaaa.tfg.annotations.Concept
import es.unizar.iaaa.tfg.annotations.LangString
import java.time.LocalDateTime
import kotlin.String
import kotlin.collections.List

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class DataService(
  @JsonProperty("id")
  public override val id: String,
  @JsonProperty("title")
  public override val title: List<LangString>? = null,
  @JsonProperty("servesDataset")
  public val servesDataset: List<DatasetInCatalog>? = null,
  @JsonProperty("description")
  public override val description: List<LangString>? = null,
  @JsonProperty("language")
  public override val language: List<String>? = null,
  @JsonProperty("fechaHoraCreacion")
  public override val fechaHoraCreacion: LocalDateTime? = null,
  @JsonProperty("ultimaModificacion")
  public override val ultimaModificacion: LocalDateTime? = null,
  @JsonProperty("inCatalog")
  public override val inCatalog: List<Catalog>? = null,
  @JsonProperty("isPrimaryTopicOf")
  public override val isPrimaryTopicOf: List<CatalogRecord>? = null,
  @JsonProperty("theme")
  public override val theme: List<String>? = null,
  @JsonProperty("identifier")
  public override val identifier: String? = null,
  @JsonProperty("license")
  public override val license: String? = null,
  @JsonProperty("publisher")
  public override val publisher: Concept? = null,
) : ResourceInCatalog, Resource, AbstractDataset {
  public companion object
}
