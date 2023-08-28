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
public interface ResourceInCatalog : AbstractDataset, Resource {
  public override val id: String

  public override val title: String

  public override val description: List<ResourceDescription>?

  public override val language: List<String>?

  public override val fechaHoraCreacion: FechaHora?

  public override val ultimaModificacion: FechaHora?

  public override val inCatalog: List<Catalog>?

  public override val isPrimaryTopicOf: List<CatalogRecord>?

  public companion object
}
