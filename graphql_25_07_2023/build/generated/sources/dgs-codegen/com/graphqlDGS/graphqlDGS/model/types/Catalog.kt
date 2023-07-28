package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import es.unizar.iaaa.tfg.annotations.Concept
import es.unizar.iaaa.tfg.annotations.LangString
import java.time.LocalDateTime
import kotlin.Int
import kotlin.String
import kotlin.collections.List

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class Catalog(
  @JsonProperty("id")
  public override val id: String,
  @JsonProperty("title")
  public override val title: List<LangString>? = null,
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
  @JsonProperty("description")
  public override val description: List<LangString>? = null,
  @JsonProperty("language")
  public override val language: List<String>? = null,
  @JsonProperty("issued")
  public override val issued: LocalDateTime? = null,
  @JsonProperty("modified")
  public override val modified: LocalDateTime? = null,
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
  @JsonProperty("numberOfResources")
  public val numberOfResources: Int? = null,
) : ResourceInCatalog, DatasetInCatalog, AbstractDataset, Resource, ReferenceWithinExternalContext {
  public companion object
}
