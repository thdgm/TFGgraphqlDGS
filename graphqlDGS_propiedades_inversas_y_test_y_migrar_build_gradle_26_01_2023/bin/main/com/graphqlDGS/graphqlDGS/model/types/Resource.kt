package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonSubTypes
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
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

  public val title: String

  public val description: List<ResourceDescription>?

  public val language: List<String>?

  public val fechaHoraCreacion: FechaHora?

  public val ultimaModificacion: FechaHora?

  public val inCatalog: List<Catalog>?

  public val isPrimaryTopicOf: List<CatalogRecord>?

  public companion object
}
