package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import kotlin.String
import kotlin.collections.List

public data class CatalogRecordInput(
  @JsonProperty("inCatalog")
  public val inCatalog: String? = null,
  @JsonProperty("catalogRecorId")
  public val catalogRecorId: String? = null,
  @JsonProperty("contentType")
  public val contentType: String? = null,
  @JsonProperty("content")
  public val content: String? = null,
  @JsonProperty("contentUrl")
  public val contentUrl: String? = null,
  @JsonProperty("hints")
  public val hints: List<String>? = null,
) {
  public companion object
}
