package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonSubTypes
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import es.unizar.iaaa.tfg.annotations.Concept
import es.unizar.iaaa.tfg.annotations.LangString
import java.time.LocalDateTime
import kotlin.String
import kotlin.collections.List

@JsonTypeInfo(
  use = JsonTypeInfo.Id.NAME,
  include = JsonTypeInfo.As.PROPERTY,
  property = "__typename",
)
@JsonSubTypes(value = [
  JsonSubTypes.Type(value = DataService::class, name = "DataService"),
  JsonSubTypes.Type(value = Catalog::class, name = "Catalog"),
  JsonSubTypes.Type(value = DatasetSeries::class, name = "DatasetSeries"),
  JsonSubTypes.Type(value = Dataset::class, name = "Dataset")
])
public interface Resource : ReferenceWithinExternalContext {
  public val id: String

  public val title: List<LangString>?

  public val description: List<LangString>?

  public val language: List<String>?

  public val issued: LocalDateTime?

  public val modified: LocalDateTime?

  public val inCatalog: List<Catalog>?

  public val isPrimaryTopicOf: List<CatalogRecord>?

  public val theme: List<String>?

  public override val identifier: List<String>?

  public val license: String?

  public val publisher: Concept?

  public companion object
}
