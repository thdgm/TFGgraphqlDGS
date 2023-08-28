package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonSubTypes
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
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
public interface Resource {
  public val id: String

  public val title: List<LangString>?

  public val description: List<LangString>?

  public val language: List<String>?

  public val fechaHoraCreacion: LocalDateTime?

  public val ultimaModificacion: LocalDateTime?

  public val inCatalog: List<Catalog>?

  public val isPrimaryTopicOf: List<CatalogRecord>?

  public companion object
}
