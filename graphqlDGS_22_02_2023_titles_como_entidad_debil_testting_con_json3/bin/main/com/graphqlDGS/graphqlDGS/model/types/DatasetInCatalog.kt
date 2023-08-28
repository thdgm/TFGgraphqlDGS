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
  JsonSubTypes.Type(value = Catalog::class, name = "Catalog"),
  JsonSubTypes.Type(value = DatasetSeries::class, name = "DatasetSeries"),
  JsonSubTypes.Type(value = Dataset::class, name = "Dataset")
])
public interface DatasetInCatalog : AbstractDataset, Resource {
  public override val id: String

  public override val title: List<LangString>?

  public override val description: List<LangString>?

  public override val language: List<String>?

  public override val fechaHoraCreacion: LocalDateTime?

  public override val ultimaModificacion: LocalDateTime?

  public override val inCatalog: List<Catalog>?

  public override val isPrimaryTopicOf: List<CatalogRecord>?

  public val isServedBy: List<DataService>?

  public override val theme: List<String>?

  public override val identifier: String?

  public override val license: String?

  public override val publisher: Concept?

  public companion object
}
