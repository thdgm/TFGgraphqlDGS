package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import es.unizar.iaaa.tfg.annotations.Concept
import es.unizar.iaaa.tfg.annotations.LangString
import es.unizar.iaaa.tfg.annotations.Periocidad
import java.time.LocalDateTime
import kotlin.String
import kotlin.collections.List

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class Dataset(
  @JsonProperty("id")
  public override val id: String,
  @JsonProperty("title")
  public override val title: List<LangString>? = null,
  @JsonProperty("inSeries")
  public val inSeries: List<DatasetSeries>? = null,
  @JsonProperty("distributions")
  public val distributions: List<Distribution>? = null,
  @JsonProperty("description")
  public override val description: List<LangString>? = null,
  @JsonProperty("keywords")
  public val keywords: List<LangString>? = null,
  @JsonProperty("language")
  public override val language: List<String>? = null,
  @JsonProperty("fechaHoraCreacion")
  public override val fechaHoraCreacion: LocalDateTime? = null,
  @JsonProperty("ultimaModificacion")
  public override val ultimaModificacion: LocalDateTime? = null,
  @JsonProperty("spatial")
  public val spatial: List<String>? = null,
  @JsonProperty("accrualPeriodicity")
  public val accrualPeriodicity: Periocidad? = null,
  @JsonProperty("temporal")
  public val temporal: CoberturaTemporal? = null,
  @JsonProperty("inCatalog")
  public override val inCatalog: List<Catalog>? = null,
  @JsonProperty("isPrimaryTopicOf")
  public override val isPrimaryTopicOf: List<CatalogRecord>? = null,
  @JsonProperty("isServedBy")
  public override val isServedBy: List<DataService>? = null,
  @JsonProperty("theme")
  public override val theme: List<String>? = null,
  @JsonProperty("license")
  public override val license: String? = null,
  @JsonProperty("publisher")
  public override val publisher: Concept? = null,
  @JsonProperty("identifier")
  public override val identifier: List<String>? = null,
) : ResourceInCatalog, DatasetInCatalog, AbstractDataset, Resource, ReferenceWithinExternalContext {
  public companion object
}
