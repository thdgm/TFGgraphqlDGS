package com.graphqlDGS.graphqlDGS.ResourceRelations

var unaVez = true

//Contiene valores <id_target,property>
val mapaCatalog1 = mutableMapOf<String,String>()

//Contiene valores <id_source, id_target> pues solo tienen un campo primaryTopic, así que no tengo que guardar la property
val catalogReocord = mutableMapOf<String,Map<String,String>>()

//Contiene la propiedad accessService de las distributions, tenemos <id_source, list<id_target>>
val distributions = mutableMapOf<String,Collection<String>>()

//Contiene la propiedad seriesDataset del dataService, tenemos <id_source, list<id_target>>
//val dataService = mutableMapOf<String,Collection<String>>()
val dataService = mutableMapOf<String,Collection<Pair<String,String>>>()
// Contiene las propiedades inSeries y distributions de un dataset, tenemos <property, list<id_target>>
val dataSet1 = mutableMapOf<String,Collection<String>>()


  //Aquí vamos a tener arrays con ID, por ejemplo ID de los catalogos que están en A. Cuando dgs solicita el 
  // catalogo(A), en catalogs busca los ID que tiene A para la property catalog. Podría ser un map, id-propiedad.
  //Es decir, si quiero catalogs de A, recorro el map, cogiendo solo los id (clave) con valor catalog.
  //Recorre esa lista de ID y asigna a catalog el catalogo correspondiente a dicho ID a través de datasetTest

  //Cuando se llama al constructor ResourceRelations(A,"catalog", B), se asigna el id B a la lista de ID del 
  //catalog A. Como su propiedad es catalog, sabemos que B es un catalog de A. 

class ResourceRelations(
   /*  var id_source: String,
    var property: String,
    var id_target: String*/
) {

  // Setter general
  fun setRelation(id_source: String,property: String,id_target: String){
    mapaCatalog1.put(id_target,property)
  }

  fun setRelationCR(id_source: String,property:String, id_target: String){
    val tp:Map<String,String> = mapOf(id_target to property)
    catalogReocord.put(id_source,tp)
  }

  fun setRelationDist(id_source: String,id_target: Collection<String>){
    distributions.put(id_source,id_target)
  }

    //Añado a la Collection (valor) de la clave id_source, los valores Pair(id_target, property)
  fun setRelationService(id_source: String,property:String,id_target: String){
    println(dataService)
    var cEmpty: Collection<Pair<String, String>>? = dataService[id_source]?.plus(Pair(id_target, property))?:listOf(Pair(id_target, property))//dataService[id_source]?.plus(Pair(id_target, property))
    dataService.put(id_source,cEmpty as Collection<Pair<String, String>>)
  }

  fun setRelationDataset(id_source: String,property: String,id_target: Collection<String>){
    dataSet1.put(property,id_target)
  }

  ///////////////////////////
  //Getters de Catalog 
  ///////////////////////////

  //Busca todas los id en el map mapaCatalog1 con property records
  fun getRecords(id:String):Collection<String>{
    println("Get Records $id")
    val filterIds = mapaCatalog1.filter { (key,value) -> value == "records"}
    return filterIds.keys
  }

  //Busca todas los id en el map mapaCatalog1 con property catalog | datasets | dataSeries
  fun getDatasets(id:String):Map<String,String>{
    println("Get Daatsets $id")
    val filterIdProperty = mapaCatalog1.filter { (key,value) -> value == "catalog" || value=="datasets"||value=="dataSeries"}
    return filterIdProperty
  }

   //Busca todas los id en el map mapaCatalog1 con property catalog
  fun getCatalogs(id:String):Collection<String>{
    println("Get Catalogs $id")
    val filterIds = mapaCatalog1.filter { (key,value) -> value == "catalog"}
    return filterIds.keys
  }

  //Busca todas los id en el map mapaCatalog1 con property services
  fun getServices(id:String):Collection<String>{
      println("Get Services $id")
      val filterIds = mapaCatalog1.filter { (key,value) -> value == "services"}
      unaVez = false
      return filterIds.keys
  
  }

  //Busca todas los id en el map mapaCatalog1 con property services | catalog | datasets | dataSeries
  fun getResources(id:String):Map<String,String>{
    println("Get Resources $id")
    val filterIdProperty = mapaCatalog1.filter { (key,value) -> value == "catalog" || value=="datasets"||value=="dataSeries" || value=="services"}
    return filterIdProperty
  }

  //Busca id del primary topic correspondiente al catalogRecord con el id que recibe como parametro
  fun getPrimaryTopic(id:String):Map<String,String>{
    println("Get PrimaryTopic $id")
    val filterIdProperty = catalogReocord.filter { (key,value) -> key==id}
    return filterIdProperty.values.elementAt(0)
  }
  //Busca los id del accessService correspondientes a la Distribution con el id que recibe como parametro
  fun getAccessService(id:String):Collection<String>{
    println("Get AccessService $id")
    val filterIdProperty = distributions.filter { (key,value) -> key==id}
    return filterIdProperty.values.elementAt(0)
   }

  //Busca los id del ServesDataset correspondientes al DataService con el id que recibe como parametro
   fun getServesDataset(id:String):Collection<Pair<String,String>>?{
    println("Get ServesDataset $id")
    return dataService[id]
   }

  //Busca los id del inSeries correspondientes al dataset con el id que recibe como parametro
  fun getInSeries(id:String):Collection<String>{
    println("Get inSeries $id")
    val filterIdProperty = dataSet1.filter { (key,value) -> key=="inSeries"}
    return filterIdProperty.values.elementAt(0)
  }

    //Busca los id del distributions correspondientes al dataset con el id que recibe como parametro
    fun getDistributions(id:String):Collection<String>{
      println("Get distributions dataset $id")
      val filterIdProperty = dataSet1.filter { (key,value) -> key=="distributions"}
      return filterIdProperty.values.elementAt(0)
    }

}



 /* 
  init{
    mapaCatalog1.put(id_target,property)
    println("MAPAPAPAPAAPAPAPAPAPPAPAPAPAPAPPAPAP")
    println(mapaCatalog1)
  }*/
