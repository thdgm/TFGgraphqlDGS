package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import es.unizar.iaaa.tfg.annotations.LangString

public data class UnaPruebilla(
  @JsonProperty("title")
  public val title: LangString? = null,
) {
  public companion object
}
