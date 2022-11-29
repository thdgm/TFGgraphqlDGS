package com.graphqlDGS.graphqlDGS.model.types

import kotlin.String

public interface AbstractDataset : Resource {
  public override val id: String

  public override val title: String

  public companion object
}
