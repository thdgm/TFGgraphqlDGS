package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.GraphQLQuery;
import java.lang.Override;
import java.lang.String;
import java.util.HashSet;
import java.util.Set;

public class DistributionGraphQLQuery extends GraphQLQuery {
  public DistributionGraphQLQuery(String id, Set<String> fieldsSet) {
    super("query");
    if (id != null || fieldsSet.contains("id")) {
        getInput().put("id", id);
    }
  }

  public DistributionGraphQLQuery() {
    super("query");
  }

  @Override
  public String getOperationName() {
     return "distribution";
                    
  }

  public static Builder newRequest() {
    return new Builder();
  }

  public static class Builder {
    private Set<String> fieldsSet = new HashSet<>();

    private String id;

    public DistributionGraphQLQuery build() {
      return new DistributionGraphQLQuery(id, fieldsSet);
               
    }

    public Builder id(String id) {
      this.id = id;
      this.fieldsSet.add("id");
      return this;
    }
  }
}
