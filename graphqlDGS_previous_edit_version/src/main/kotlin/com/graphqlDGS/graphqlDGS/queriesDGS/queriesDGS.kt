package com.graphqlDGS.graphqlDGS.queriesDGS

import com.graphqlDGS.graphqlDGS.Services.*
import com.graphqlDGS.graphqlDGS.model.types.*
import com.netflix.graphql.dgs.*
import com.graphqlDGS.graphqlDGS.Enum.Properties

@DgsComponent
class Queries(private val initService: InitServices, private val getFieldService:GetFieldService) {

  //////////////////////////////////////////
  // CATALOG QUERIES
  //////////////////////////////////////////

  // @DgsQuery catalog: returns the catalog which id is the @InputArgument id
  @DgsQuery
  fun catalog(@InputArgument id: String?): Catalog? {
    if (id == null) {
      return null
    }
    //println("ERRRRORRRRRRR")
    //println(try{initService.showCatalogs().first { it?.id == id }}catch(e: Exception){null} )
    return try{initService.showCatalogs().first { it?.id == id }}catch(e: Exception){null} 
  }

  // @DgsData catalogs: returns catalogs field of the corresponding Catalog
  @DgsData(parentType = "Catalog")
  fun catalogs(dfe: DgsDataFetchingEnvironment): Collection<Catalog?> {
    val ct: Catalog? = dfe.getSource()
    return initService.showCatalogs().filter { it?.id in getFieldService.loadCatalogs(ct!!.id,Properties.CATALOGS.n) }
  }

  // @DgsData records: returns records field of the corresponding Catalog
  @DgsData(parentType = "Catalog")
  fun records(dfe: DgsDataFetchingEnvironment): Collection<CatalogRecords?> {
    val ct: Catalog? = dfe.getSource()
    return initService.showCatalogRecords().filter { it?.id in getFieldService.loadCatalogs(ct!!.id,Properties.RECORDS.n) }
  }


  // @DgsData services: returns services field of the corresponding Catalog
  @DgsData(parentType = "Catalog")
  fun services(dfe: DgsDataFetchingEnvironment): Collection<DataService?> {
    val ct: Catalog? = dfe.getSource()
    return initService.showDataServices().filter { it?.id in getFieldService.loadCatalogs(ct!!.id,Properties.SERVICES.n) }
  }

  // @DgsData datasets: returns datasets field of the corresponding Catalog
  @DgsData(parentType = "Catalog")
  fun datasets(dfe: DgsDataFetchingEnvironment): Collection<DatasetInCatalog?> {
    val ct: Catalog? = dfe.getSource()
    
    val cat = initService.showCatalogs().filter { it?.id in getFieldService.loadCatalogs(ct!!.id,Properties.CATALOGS.n) }
    val d = initService.showDatasets().filter { it?.id in getFieldService.loadCatalogs(ct!!.id,Properties.DATSETS.n) }
    val ds = initService.showDatasetSeries().filter { it?.id in getFieldService.loadCatalogs(ct!!.id,Properties.DATASERIES.n) }
    return cat + d + ds
  }

  // @DgsData resources: returns resources field of the corresponding Catalog
  @DgsData(parentType = "Catalog")
  fun resources(dfe: DgsDataFetchingEnvironment): Collection<ResourceInCatalog?> {
    val ct: Catalog? = dfe.getSource()
   val cat = initService.showCatalogs().filter { it?.id in getFieldService.loadCatalogs(ct!!.id,Properties.CATALOGS.n) }
   val d = initService.showDatasets().filter { it?.id in getFieldService.loadCatalogs(ct!!.id,Properties.DATSETS.n) }
   val ds = initService.showDatasetSeries().filter { it?.id in getFieldService.loadCatalogs(ct!!.id,Properties.DATASERIES.n) }
   val dSe = initService.showDataServices().filter { it?.id in getFieldService.loadCatalogs(ct!!.id,Properties.SERVICES.n) }
   return cat + d + ds + dSe
  }


  //////////////////////////////////////////
  // DATASERIES QUERIES
  //////////////////////////////////////////

  // @DgsQuery dataSeries: returns the dataSeries which id is the @InputArgument id
  @DgsQuery
  fun dataSeries(@InputArgument id: String?): DatasetSeries? {
    if (id == null) {
      return null
    }
    return try{initService.showDatasetSeries().first { it?.id == id }}catch(e: Exception){null} 
  }

  //////////////////////////////////////////
  // CATALOGRECORDS QUERIES
  //////////////////////////////////////////

  // @DgsQuery catalogRecord: returns the catalogRecord which id is the @InputArgument id
  @DgsQuery
  fun catalogRecord(@InputArgument id: String?): CatalogRecords? {
    if (id == null) {
      return null
    }
    return try{initService.showCatalogRecords().first { it?.id == id }}catch(e: Exception){null} 
  }

  //////////////////////////////////////////
  // DISTRIBUTION QUERIES
  //////////////////////////////////////////

  // @DgsQuery distribution: returns the distribution which id is the @InputArgument id
  @DgsQuery
  fun distribution(@InputArgument id: String?): Distribution? {
    if (id == null) {
      return null
    }
    return try{initService.showDistributions().first { it?.id == id }}catch(e: Exception){null} 
  }

  // @DgsData accessService: returns accessService field of the corresponding Distribution
  @DgsData(parentType = "Distribution")
  fun accessService(dfe: DgsDataFetchingEnvironment): Collection<DataService?> {
    val dist: Distribution? = dfe.getSource()
    return initService.showDataServices().filter { it?.id in getFieldService.loadDistributions(dist!!.id,Properties.ACCESSSERVICE.n) }
  }

  //////////////////////////////////////////
  // DATASET QUERIES
  //////////////////////////////////////////

  // @DgsQuery dataset: returns the dataset which id is the @InputArgument id
  @DgsQuery
  fun dataset(@InputArgument id: String?): DatasetInCatalog? {
    if (id == null) {
      return null
    }
    return try{initService.showDatasetsInCatalog().first {
      when (it) {
        is Dataset -> it.id == id
        is Catalog -> it.id == id
        is DatasetSeries -> it.id == id
        else -> false
      }

    }}catch(e: Exception){null} 
  }

  // @DgsData inSeries: returns inSeries field of the corresponding Dataset
  @DgsData(parentType = "Dataset")
  fun inSeries(dfe: DgsDataFetchingEnvironment): Collection<DatasetSeries?> {
    return when (val dic: DatasetInCatalog? = dfe.getSource()) {
      is Dataset -> initService.showDatasetSeries().filter { it?.id in getFieldService.loadDatasets(dic.id,Properties.INSERIES.n) }
      else -> listOf()
    }
  }

  // @DgsData distributions: returns distributions field of the corresponding Dataset
  @DgsData(parentType = "Dataset")
  fun distributions(dfe: DgsDataFetchingEnvironment): Collection<Distribution?> {
    return when (val dic: DatasetInCatalog? = dfe.getSource()) {
      is Dataset -> initService.showDistributions().filter { it?.id in getFieldService.loadDatasets(dic.id,Properties.DISTRIBUTIONS.n) }
      else -> listOf()
    }
  }

  //////////////////////////////////////////
  // DATASERVICE QUERIES
  //////////////////////////////////////////

  // @DgsQuery dataService: returns the dataService which id is the @InputArgument id
  @DgsQuery
  fun dataService(@InputArgument id: String?): DataService? {
    if (id == null) {
      return null
    }
    return try{initService.showDataServices().first { it?.id == id }}catch(e: Exception){null} 
  }

  // @DgsData servesDataset: returns servesDataset field of the corresponding DataService
  @DgsData(parentType = "DataService")
  fun servesDataset(dfe: DgsDataFetchingEnvironment): Collection<DatasetInCatalog?> {
    val dserv: DataService? = dfe.getSource()
    val cat = initService.showCatalogs().filter { it?.id in getFieldService.loadServices(dserv!!.id,Properties.CATALOGS.n) }
    val d = initService.showDatasets().filter { it?.id in getFieldService.loadServices(dserv!!.id,Properties.DATSETS.n) }
    val ds = initService.showDatasetSeries().filter { it?.id in getFieldService.loadServices(dserv!!.id,Properties.DATASERIES.n) }
    return cat + d + ds
  }


  //////////////////////////////////////////
  // RESOURCE QUERIES
  //////////////////////////////////////////

 // @DgsQuery resource: returns the resource which id is the @InputArgument id
 @DgsQuery
 fun resource(@InputArgument id: String?): Resource? {
   if (id == null) {
     return null
   }
 
   return try{initService.showResourcesInCatalog().first {
     when (it) {
       is Dataset -> it.id == id
       is Catalog -> it.id == id
       is DatasetSeries -> it.id == id
       is DataService -> it.id == id
       else -> false
     }
   } as Resource?}catch(e: Exception){null} 
 }

  // @DgsQuery resources: returns the resourceInCatalog which id is the @InputArgument id
  @DgsQuery
  fun resources(@InputArgument id: String?): ResourceInCatalog? {
    if (id == null) {
      return null
    }

    return try{initService.showResourcesInCatalog().first {
      when (it) {
        is Dataset -> it.id == id
        is Catalog -> it.id == id
        is DatasetSeries -> it.id == id
        is DataService -> it.id == id
        else -> false
      }
    }}catch(e: Exception){null} 
  }
}

  ////////////////////////////
  // FUNCIONES AUXILAIRES, NO ME QUEDA CLARO SI HAY QUE USARLAS
  ////////////////////////////


  /* Inicia las propiedades de dataset
  fun iniciarDataset(data:Dataset?,id:String):Dataset?{
    return data?.copy(
      inSeries = model.searchInSeriesForDatasetById(id),
      distributions = model.searchDistributionsForDatasetById(id)
    )
  }
*/
    /* Inicia las propiedades de catalog
  fun iniciarCatalog(cat:Catalog?,id:String):Catalog?{
    return cat?.copy(
      records = model.searchRecordsForCatalogById(id),
      catalogs = model.searchCatalogsForCatalogById(id),
      services = model.searchServicesForCatalogById(id),
      datasets = model.searchDatasetsForCatalogById(id),
      resources = model.searchResourcesorCatalogById(id)
    )
  }

  //Inicia las propiedades de dataService
  fun iniciarDataService(dserv:DataService?,id:String):DataService?{
    return dserv?.copy(
      servesDataset = model.searchServesDatasetForDataServicedById(id) as
              List<DatasetInCatalog>?
    )

  }

  // Inicia las propeidades de catalogRecord
  fun iniciarCR(pt: ResourceInCatalog?){
    when(pt){
     // is Catalog -> iniciarCatalog(pt,pt.id)
      is Dataset -> iniciarDataset(pt,pt.id)
      is DataService -> iniciarDataService(pt,pt.id)
    }
  }

  // Inicia las propiedades de distribution
  fun iniciarDist(services:List<DataService>?){
    if(services != null){
      for (s in services){
        iniciarDataService(s,s.id)
      }
    }
  }*/
  


  /*@DgsQuery
  fun resource(@InputArgument id: String?): Resource? {
    if (id == null) {
      return null
    }
    // return albums.first { it.id == id }
    return model?.get(c, id) as Resource?
  }*/
/*

{
  catalog(id:"catalog1"){
   	id
   	title
    services{
      id
    }
    catalogs{
      id
      catalogs{
        id
      }
    }
    records{
      title
    }
  
		datasets{
      __typename
      ... on Dataset{
        id
      }
       ... on DatasetSeries{
        id
      }
      ... on Catalog{
        id
        catalogs{
          id
          catalogs{
            title
          }
        }
        datasets{
           __typename
      ... on Dataset{
        title
      }
       ... on Catalog{
        title
      }
        }
      }
    }

		resources{
      __typename
      ... on Dataset{
        id
      }
       ... on DatasetSeries{
        id
      }
      ... on Catalog{
        id
        catalogs{
          title
        }
      }
        ... on DataService{
        id
      }
    }
    
  }
}

*/


/*


{
  
	dataset(id:"dS1"){
    __typename
    ... on Dataset{
      id
      inSeries{
        id
      }
      distributions{
        id
      }
    }
    ... on Catalog{
      id
      records{
        id
      }
    }
    ... on DatasetSeries{
      id
    }
    
  }
 	
    
    
  
}

*/


    /*cat?.copy(
      records = model.searchRecordsForCatalogById(id),
      catalogs = model.searchCatalogsForCatalogById(id),
      services = model.searchServicesForCatalogById(id),
      datasets = model.searchDatasetsForCatalogById(id),  
      resources = model.searchResourcesorCatalogById(id),
    )*/

    /*
    
    
{
  dataset(id:"catalog1"){
    __typename
    	... on Dataset{
        	id
        	inSeries{
          	id
            title
        	}
      	}
       	... on DatasetSeries{
        	id
      	}
      	... on Catalog{
        	id
          records{
            id
            primaryTopic{
              __typename
               ... on Dataset{
        				id
      				}
       				... on DatasetSeries{
        				id
      				}
              ... on Catalog{
        				id
      				}
              ... on DataService{
        				id
      				}
            }
          }
      	}
  }
  dataService(id:"dSer1"){
		id
    title
    servesDataset{
     __typename
       	... on Dataset{
        	id
      	}
       	... on DatasetSeries{
        	id
      	}
      	... on Catalog{
        	id
      	}
      }
  }
  distribution(id:"Dist2"){
    id
    title
    accessService{
      id
      title
      servesDataset{
        __typename
       	... on Dataset{
        	id
      	}
       	... on DatasetSeries{
        	id
      	}
      	... on Catalog{
        	id
      	}
    	}
    }
  }
  catalogRecord(id:"cR4"){
    id
    primaryTopic{
      __typename
       ... on Dataset{
        id
      }
       ... on DatasetSeries{
        id
      }
      ... on Catalog{
        id
        records{
          id
          primaryTopic{
            __typename
       ... on Dataset{
        id
      }
       ... on DatasetSeries{
        id
      }
      ... on Catalog{
        id
        records{
          id
         
        }
      }
      ... on DataService{
        id
      }
          }
        }
      }
      ... on DataService{
        id
      }
    }
  }
	catalog(id:"catalog1"){
   	id
  	title
    resources{
       __typename
       ... on Dataset{
        id
      }
       ... on DatasetSeries{
        id
      }
      ... on Catalog{
        id
      }
      ... on DataService{
        id
      }
    }
    datasets{
      __typename
       ... on Dataset{
        id
      }
       ... on DatasetSeries{
        id
      }
      ... on Catalog{
        id
        records{
          title
        }
      }
    }
    services{
      id
      title
    }
    records{
      id
      primaryTopic{
        __typename
        ... on Catalog{
          id
          records{
            title
          }
        }
      }
    }
    catalogs{
      id
      title
      catalogs{
        id
      }
    }
   
  }
    
}


    
    
    
    */

      /*val cR = DatasetTest.CollectionTypes.CatalogRecords()
  val dS = DatasetTest.CollectionTypes.DatasetSeries()
  val dSe = DatasetTest.CollectionTypes.DatasetService()
  val di = DatasetTest.CollectionTypes.Distribution()*/