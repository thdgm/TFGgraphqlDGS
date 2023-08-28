package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty

public data class CoberturaTemporal(
  @JsonProperty("start")
  public val start: FechaHora? = null,
  @JsonProperty("end")
  public val end: FechaHora? = null,
) {
  public companion object
}
