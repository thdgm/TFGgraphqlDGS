package com.graphqlDGS.graphqlDGS.model.types

import com.fasterxml.jackson.`annotation`.JsonProperty
import java.time.LocalDateTime

public data class PeriodOfTime(
  @JsonProperty("start")
  public val start: LocalDateTime? = null,
  @JsonProperty("end")
  public val end: LocalDateTime? = null,
) {
  public companion object
}
