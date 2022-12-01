package com.graphqlDGS.graphqlDGS.data

import com.graphqlDGS.graphqlDGS.ResourceRelations.ResourceRelations
import com.graphqlDGS.graphqlDGS.model.types.*
import org.springframework.stereotype.Component
import javax.annotation.PostConstruct


@Component
class DatasetTest() {

  //////////////////////////////////////////
  // Definicion de los tipos
  //////////////////////////////////////////

  //Para establecer las propiedades de los distintos tipos
  val relation = ResourceRelations()


  // DatasetService
  val datasetService1 =
      DataService("dSer1", "dServTit1")

  // DataSeries
  val dataSeries1 = DatasetSeries("dS1", "dSTit1")

  // Distributions
  val distribution1 = Distribution("Dist1", "DistTit1")
  val distribution2 = Distribution("Dist2", "DistTit2")
  val distribution3 = Distribution("Dist3", "DistTit3")

  // Dataset
  val dataset1 = Dataset( "d1", "dTit1")

  // El catalogo de la prueba se contiene a si mismo
  val catalogo1 = Catalog("catalog1", "catalogTit1")
  

  // CatalogRecords
  val catalogRecord1 = CatalogRecords("cR1", "cRTit1",catalogo1)
  val catalogRecord2 = CatalogRecords("cR2", "cRTit2",catalogo1)
  val catalogRecord3 = CatalogRecords("cR3", "cRTit3",catalogo1)
  val catalogRecord4 = CatalogRecords("cR4", "cRTit4",catalogo1)

  //////////////////////////////////////////
  // Definicion de las colecciones de prueba
  //////////////////////////////////////////

  val catalogo: Collection<Catalog> = setOf(catalogo1)

  val dataset: Collection<Dataset> = setOf(dataset1)

  val datasetSeries: Collection<DatasetSeries> = setOf(dataSeries1)

  val datasetService: Collection<DataService> = setOf(datasetService1)

  val catalogRecords: Collection<CatalogRecords> = setOf(catalogRecord1,catalogRecord2,catalogRecord3,catalogRecord4)

  val resourceInCatalog: Collection<ResourceInCatalog>  = setOf(catalogo1,dataSeries1,dataset1,datasetService1)

  val datasetsInCatalog: Collection<ResourceInCatalog>  = setOf(catalogo1,dataSeries1,dataset1)

  val distributions: Collection<Distribution> = setOf(distribution1,distribution2,distribution3)


  @PostConstruct
  fun init(){
    println("INIT RELATIONS")
    //Digo que tiene un catalog que es el mismo
    relation.setRelation("catalog1","catalog","catalog1")
    //Digo que tiene un catalogRecord que es el catalogRecord1
    relation.setRelation("catalog1","records","cR1")
    //Digo que tiene un catalogRecord que es el catalogRecord2
    relation.setRelation("catalog1","records","cR2")
    //Digo que tiene un catalogRecord que es el catalogRecord3
    relation.setRelation("catalog1","records","cR3")
    //Digo que tiene un catalogRecord que es el catalogRecord4
    relation.setRelation("catalog1","records","cR4")
    //Digo que tiene un services que es el datasetService1
    relation.setRelation("catalog1","services","dSer1")
    //Digo que tiene un datasets que es el dataset1
    relation.setRelation("catalog1","datasets","d1")
    //Digo que tiene un datasetSeries que es el dataSeries1
    relation.setRelation("catalog1","dataSeries","dS1")
  
    /*Digo que tiene un ResourceInCatalog que es el catalog1
    relation.setRelationCR("cR1","catalog","catalog1")
    //Digo que tiene un ResourceInCatalog que es el dataset1
    relation.setRelationCR("cR2","datasets","d1" )
    //Digo que tiene un ResourceInCatalog que es el dataSet1
    relation.setRelationCR("cR3","dataSeries","dS1")
    //Digo que tiene un ResourceInCatalog que es el datasetService1
    relation.setRelationCR("cR4","services","dSer1")*/

    //Digo que Distribution Dist1 tiene un accessService que es el datasetService1
    relation.setRelationDist("Dist1",listOf("dSer1"))
    //Digo que Distribution Dist2 tiene un accessService que es el datasetService1
    relation.setRelationDist("Dist2",listOf("dSer1"))
    //Digo que Distribution Dist3 tiene un accessService que es el datasetService1
    relation.setRelationDist("Dist3",listOf("dSer1"))

    //Digo que dataService dSer1 tiene un servesDataset que es el catalog1, d1, dS1
    //relation.setRelationService("dSer1","datasets",listOf("dS1","catalog1","d1"))
    relation.setRelationService("dSer1","datasets","d1")
    relation.setRelationService("dSer1","catalog","catalog1")
    relation.setRelationService("dSer1","dataSeries","dS1")

    //Digo que dataset d1 tiene inSeries [ dS1 ] 
    relation.setRelationDataset("d1","inSeries",listOf("dS1"))
    //Digo que dataset d1 tiene distributions [ Dist1, Dist2, Dist3 ]
    relation.setRelationDataset("d1","distributions",listOf("Dist1", "Dist2", "Dist3"))
    
  }


  sealed class CollectionTypes {
    class Catalog : CollectionTypes()
    class CatalogRecords : CollectionTypes()
    class Dataset : CollectionTypes()
    class DatasetSeries : CollectionTypes()
    class DatasetService : CollectionTypes()
    class Distribution : CollectionTypes()
    class DatasetInCatalog : CollectionTypes()
    class ResourceInCatalog : CollectionTypes()
  }

  fun get(c: CollectionTypes, id: String): Any? {
    return when (c) {
      is CollectionTypes.Catalog -> catalogo.first{ it.id == id }
      is CollectionTypes.CatalogRecords -> catalogRecords.first{ it.id == id }
      is CollectionTypes.DatasetInCatalog ->  compareDatasetInCatalogId(id) 
      is CollectionTypes.DatasetSeries -> datasetSeries.first{ it.id == id }
      is CollectionTypes.DatasetService -> datasetService.first{ it.id == id }
      is CollectionTypes.Distribution -> distributions.first{ it.id == id }
      is CollectionTypes.ResourceInCatalog -> compareResourceInCatalogId(id) 
      else -> {return null}
    }
  }

  // Busca en datasetsInCatalog el elemento con id igual al dado como parametro, en función de su tipo
  fun compareDatasetInCatalogId(id:String):DatasetInCatalog?{
    
      for (i in datasetsInCatalog){
        if (i is Catalog){
          if(i.id == id){
           return i
          }
        }
        else if (i is Dataset){
          if(i.id == id){
            return i
           }
        }
        else if (i is DatasetSeries){
          if(i.id == id){
            return i
           }
        }
       
      }
    return null
  }

   // Busca en resourceInCatalog el elemento con id igual al dado como parametro, en función de su tipo
   fun compareResourceInCatalogId(id:String):ResourceInCatalog?{
    
    for (i in resourceInCatalog){
      if (i is Catalog){
        if(i.id == id){
         return i
        }
      }
      else if (i is Dataset){
        if(i.id == id){
          return i
         }
      }
      else if (i is DatasetSeries){
        if(i.id == id){
          return i
         }
      }
      else if (i is DataService){
        if(i.id == id){
          return i
         }
      }
    }
  return null
}

//////////////////////////////////////////
  // Funciones Auxiliares
  //////////////////////////////////////////

//Función auxiliar. Ayuda a buscar en las colecciones DatasetInCatalog
fun buscar(clave:String, valor:String):DatasetInCatalog?{
  println("CLAVE: $clave VALOR: $valor")
  return when (valor) {
    "datasets" -> dataset.first{ it.id == clave }
    "catalog" -> catalogo.first{ it.id == clave }
    "dataSeries" -> datasetSeries.first{ it.id == clave }
    else -> null
  }
}
//Función auxiliar. Ayuda a buscar en las colecciones ResourceInCatalog
fun buscarR(clave:String, valor:String):ResourceInCatalog{
  println("CLAVE: $clave VALOR: $valor")
  return when (valor) {
    "datasets" -> dataset.first{ it.id == clave }
    "catalog" -> catalogo.first{ it.id == clave }
    "dataSeries" -> datasetSeries.first{ it.id == clave }
    "services" -> datasetService.first{ it.id == clave }
    else -> throw AssertionError()
  }
}

  //////////////////////////////////////////
  // Obtener campos del catalog, los pide el DGS
  //////////////////////////////////////////

// Localiza records del catalog en la colección a través de su id
fun searchRecordsForCatalogById(id:String):List<CatalogRecords?>{
  val idRecords:Collection<String> = relation.getRecords(id)
  val records = catalogRecords.filter{ it.id in idRecords }
  return records
}

// Localiza catalogs del catalog en la colección a través de su id
fun searchCatalogsForCatalogById(id:String):List<Catalog?>{
  val idCatalog:Collection<String> = relation.getCatalogs(id)
  val catalogs:List<Catalog?> = catalogo.filter{ it.id in idCatalog }
  return catalogs
}

// Localiza services del catalog en la colección a través de su id 
fun searchServicesForCatalogById(id:String):List<DataService?>{
  val idServices:Collection<String> = relation.getServices(id)
  val services = datasetService.filter{ it.id in idServices }
  return services
}

// Localiza un datasets del catalog en la colección a través de su id
fun searchDatasetsForCatalogById(id:String):List<DatasetInCatalog?>{
  val idDatasets:Map<String,String> = relation.getDatasets(id)
  // Aquí puedo devolver un map<String, String> y con un when busco según sea catalogs | datasets | dataSeries
  var datasets:List<DatasetInCatalog?> = mutableListOf()
  for ((id,property) in idDatasets){
    if (datasets != null) {
      datasets+=buscar(id, property)
    }
  }
  return datasets
}

// Localiza un resources del catalog en la colección a través de su id
fun searchResourcesorCatalogById(id:String):List<ResourceInCatalog?>{
  val idResources:Map<String,String> = relation.getResources(id)
  var resources:List<ResourceInCatalog?> = mutableListOf()
  for ((id,property) in idResources){
    if (resources != null) {
      resources+=buscarR(id, property)
    }
  }
  return resources
}



  //////////////////////////////////////////
  // Obtener campos del catalogRecord, los pide el DGS
  //////////////////////////////////////////

/*Recibe el id del catalog record, y busca el id del primary topic del mismo
fun searchPrimaryTopicForCatalogRecordById(id:String):ResourceInCatalog{
  //val idPrimaryTopic:String = relation.getPrimaryTopic(id).elementAt(0)
  val idPrimaryTopic:Map<String,String> = relation.getPrimaryTopic(id)
  var primaryTopic:ResourceInCatalog = buscarR(idPrimaryTopic.keys.elementAt(0),idPrimaryTopic.values.elementAt(0)) //resourceInCatalog.filter{ it.id in idPrimaryTopic }
  return primaryTopic
}
*/

  //////////////////////////////////////////
  // Obtener campos del Distributions, los pide el DGS
  //////////////////////////////////////////

//Busca el accessServices de la distribution id
fun searchAccessServicesForDistributionById(id:String):List<DataService?>{
  val idServices:Collection<String> = relation.getAccessService(id)
  val services = datasetService.filter{ it.id in idServices }
  return services
}


//////////////////////////////////////////
  // Obtener campos del DataService, los pide el DGS
//////////////////////////////////////////

// Busca los servesDataset del DataService id
fun searchServesDatasetForDataServicedById(id:String):List<DatasetInCatalog?>{
  val idPServesDataset:Collection<Pair<String,String>>? = relation.getServesDataset(id)
  var servesDataset:List<DatasetInCatalog?> = listOf() //resourceInCatalog.filter{ it.id in idPrimaryTopic }
  if (idPServesDataset != null) {
    if (servesDataset != null) {
      for ((id, prop) in idPServesDataset){
        servesDataset += buscar(id,prop)
      }
    }
  }
  return servesDataset
}

//////////////////////////////////////////
  // Obtener campos del Dataset, los pide el DGS
//////////////////////////////////////////

//Search accessServices for distribution id
fun searchInSeriesForDatasetById(id:String):List<DatasetSeries?>{
  val idInseries:Collection<String> = relation.getInSeries(id)
  val inSeries = datasetSeries.filter{ it.id in idInseries }
  return inSeries
}

//Search accessServices for distribution id
fun searchDistributionsForDatasetById(id:String):List<Distribution?>{
  val idDistributions:Collection<String> = relation.getDistributions(id)
  val distributions = distributions.filter{ it.id in idDistributions }
  return distributions
}




}










  //val distributions2: Collection<Distribution> = setOf(distribution2)
  //val distributions3: Collection<Distribution> = setOf(distribution3)

  /*val listaDistributions: Collection<Collection<Distribution>> =
      setOf(distributions1, distributions2, distributions3)*/
  /*val listaCatalogRecords: Collection<Collection<CatalogRecord>> =
      setOf(catalogRecords1, catalogRecords2, catalogRecords3, catalogRecords4)*/


/*

  //////////////////////////////////////////
  // CONSTRUTOR
  //////////////////////////////////////////

  var constructor = ConstructorDat(
    Data_ServiceC =  DataService("dSer1", "dServTit1", servesDataset = listOf()),
    DatasetList = mutableListOf(dataset1),
    CatalogoC= Catalog(
          "catalog1",
          "catalogTit1",
          datasets = listOf(dataset1),
          services = listOf(),
          catalogs = catalogo,
          records = listOf()
      ),
    Catalog_RecordList=mutableListOf(catalogRecord1))



  val catalogo1 = constructor.getCatalog()


*/


  
  /*//Digo que tiene un catalogRecord que es el catalogRecord1
  val catalogRelationsRecords1 = ResourceRelations("catalogo1","records","cR1")
   //Digo que tiene un catalogRecord que es el catalogRecord2
   val catalogRelationsRecords2 = ResourceRelations("catalogo1","records","cR2")
    //Digo que tiene un catalogRecord que es el catalogRecord3
  val catalogRelationsRecords3 = ResourceRelations("catalogo1","records","cR3")
   //Digo que tiene un catalogRecord que es el catalogRecord4
   val catalogRelationsRecords4 = ResourceRelations("catalogo1","records","cR4")
  //Digo que tiene un services que es el datasetService1
  val catalogRelationsServices = ResourceRelations("catalogo1","services","dSer1")
  //Digo que tiene un datasets que es el dataset1
  val catalogRelationsDatasets = ResourceRelations("catalogo1","datasets","d1")
    //Digo que tiene un datasetSeries que es el dataSeries1
  val catalogRelationsDatasetSeries = ResourceRelations("catalogo1","dataSeries","dS1")*/


  /*del catalog id y busca en datasetTest los records con ese id
 fun getCatalogRelations(clave:String, id:String):List<CatalogRecord>?{
  return when (clave) {
    "records" -> searchRecordsById(id)
    "datsets" -> searchRecordsById(id)
    "catalogs" -> searchRecordsById(id)
    "services" -> searchRecordsById(id)
    "resources" -> searchRecordsById(id)
    else -> null
  }
}*/



  /*for (i in resourceInCatalog){
    if (i is Catalog){
      println(i.id)
      if(i.id == idPrimaryTopic){
        println("C")
        primaryTopic = i
        break
      }
    }
    else if (i is Dataset){
      println(i.id)
      if(i.id == idPrimaryTopic){
        println("D")
        primaryTopic = i
        break
      }
    }
    else if (i is DatasetSeries){
      println(i.id)
      if(i.id == idPrimaryTopic){
        println("DSeries")
        primaryTopic = i
        break
      }
    }
    else if (i is DataService){
      println(i.id)
      if(i.id == idPrimaryTopic){
        println("DService")
        primaryTopic = i
        break
      }
    }

  }*/

  /*  if (servesDataset != null) {
    for (i in datasetsInCatalog){
      if (i is Catalog){
        println(i.id)
        if(i.id in idPServesDataset){
          println("C")
          servesDataset += i
        }
      }
      else if (i is Dataset){
        println(i.id)
        if(i.id in idPServesDataset){
          println("D")
          servesDataset += i
        }
      }
      else if (i is DatasetSeries){
        println(i.id)
        if(i.id in idPServesDataset){
          println("DSeries")
          servesDataset += i
        }
      }
    }
  }*/