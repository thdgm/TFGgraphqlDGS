package com.graphqlDGS.graphqlDGS.model.client;

import com.netflix.graphql.dgs.client.codegen.GraphQLQuery;
import java.lang.Override;
import java.lang.String;
import java.util.HashSet;
import java.util.Set;

public class CatalogRecordGraphQLQuery extends GraphQLQuery {
  public CatalogRecordGraphQLQuery(String id, Set<String> fieldsSet) {
    super("query");
    if (id != null || fieldsSet.contains("id")) {
        getInput().put("id", id);
    }
  }

  public CatalogRecordGraphQLQuery() {
    super("query");
  }

  @Override
  public String getOperationName() {
     return "catalogRecord";
                    
  }

  public static Builder newRequest() {
    return new Builder();
  }

  public static class Builder {
    private Set<String> fieldsSet = new HashSet<>();

    private String id;

    public CatalogRecordGraphQLQuery build() {
      return new CatalogRecordGraphQLQuery(id, fieldsSet);
               
    }

    public Builder id(String id) {
      this.id = id;
      this.fieldsSet.add("id");
      return this;
    }
  }
}
