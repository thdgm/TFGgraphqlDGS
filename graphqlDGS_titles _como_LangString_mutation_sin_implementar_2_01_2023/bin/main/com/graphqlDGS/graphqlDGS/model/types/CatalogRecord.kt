package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import com.fasterxml.jackson.`annotation`.JsonTypeInfo
import kotlin.String
import kotlin.collections.List

@JsonTypeInfo(use = JsonTypeInfo.Id.NONE)
public data class CatalogRecord(
  @JsonProperty("id")
  public val id: String,
  @JsonProperty("title")
  public val title: String? = null,
  @JsonProperty("contentType")
  public val contentType: String? = null,
  @JsonProperty("content")
  public val content: String? = null,
  @JsonProperty("contentURL")
  public val contentURL: String? = null,
  @JsonProperty("hints")
  public val hints: List<String>? = null,
  @JsonProperty("primaryTopic")
  public val primaryTopic: ResourceInCatalog,
  @JsonProperty("inCatalog")
  public val inCatalog: String? = null,
) : CatalogRecordOutput {
  public companion object
}
