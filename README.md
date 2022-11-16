# TFGgraphqlDGS
TFG Diego Garcia Muro 


## Example

https://github.com/Netflix/dgs-examples-kotlin

https://www.baeldung.com/spring-boot-domain-graph-service

```java
private final List<Album> albums = Arrays.asList(
  new Album("Rumours", "Fleetwood Mac", 20),
  new Album("What's Going On", "Marvin Gaye", 10), 
  new Album("Pet Sounds", "The Beach Boys", 12)
  );

@DgsQuery
fun catalog(@InputArgument id: String?): Catalog? {
    if (id == null) {
        return null
    }
    return albums.first { it.id == id }
}
```

DGS also comes with a code-gen plugin to generate Java or Kotlin code from GraphQL Schema. # Code generation is typically integrated with the build.

1 catalogo "Catalogo"
4 catalog records "Metadato del catálogo", "metadato del dataset", "metadato del dataset series" y "metadato del data service"
1 dataset "Dataset"
1 dataset series "Dataset series"
1 dataServices "Data service"
3 distribution "Distribucion del catálogo", "distribución del dataset", "distribución del dataset series"

catálogo tiene 4 catalog records: el mismo, el dataset puro, el dataset series y el data services

dataset puro esta en la serie de dataset series

catalog, dataset puro y el dataset series tienen distibución

todas las distribuciones están servidas por el mismo servicio





