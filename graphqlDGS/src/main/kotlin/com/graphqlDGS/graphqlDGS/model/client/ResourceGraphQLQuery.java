package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.GraphQLQuery;
import java.lang.Override;
import java.lang.String;
import java.util.HashSet;
import java.util.Set;

public class ResourceGraphQLQuery extends GraphQLQuery {
  public ResourceGraphQLQuery(String id, Set<String> fieldsSet) {
    super("query");
    if (id != null || fieldsSet.contains("id")) {
        getInput().put("id", id);
    }
  }

  public ResourceGraphQLQuery() {
    super("query");
  }

  @Override
  public String getOperationName() {
     return "resource";
                    
  }

  public static Builder newRequest() {
    return new Builder();
  }

  public static class Builder {
    private Set<String> fieldsSet = new HashSet<>();

    private String id;

    public ResourceGraphQLQuery build() {
      return new ResourceGraphQLQuery(id, fieldsSet);
               
    }

    public Builder id(String id) {
      this.id = id;
      this.fieldsSet.add("id");
      return this;
    }
  }
}
