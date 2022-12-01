package com.graphqlDGS.graphqlDGS.queriesDGS

import com.graphqlDGS.graphqlDGS.data.DatasetTest
import com.graphqlDGS.graphqlDGS.model.types.*
import com.netflix.graphql.dgs.*
import org.springframework.beans.factory.annotation.Autowired

@DgsComponent
class Queries {

  // @DgsQuery annotation: shorthand to define datafetchers on the Query



  @Autowired private val model: DatasetTest = DatasetTest()

  val c = DatasetTest.CollectionTypes.Catalog()
  val d = DatasetTest.CollectionTypes.DatasetInCatalog()
  val cR = DatasetTest.CollectionTypes.CatalogRecords()
  val dS = DatasetTest.CollectionTypes.DatasetSeries()
  val dSe = DatasetTest.CollectionTypes.DatasetService()
  val di = DatasetTest.CollectionTypes.Distribution()
  val r = DatasetTest.CollectionTypes.ResourceInCatalog()


  //////////////////////////////////////////
  // CATALOG QUERIES
  //////////////////////////////////////////

  // @DgsQuery catalog: returns the catalog which id is the @InputArgument id
  @DgsQuery
  fun catalog(@InputArgument id: String?): Catalog? {
    if (id == null) {
      return null
    }
    var cat: Catalog? = model?.get(c, id) as Catalog?
    return cat
  }

   // @DgsData catalogs: returns catalogs field of the corresponding Catalog
  @DgsData(parentType="Catalog", field="catalogs")
  fun catalogs(dfe: DgsDataFetchingEnvironment):Collection<Catalog?>{
    val ct: Catalog? = dfe.getSource()
    return model.searchCatalogsForCatalogById(ct!!.id)
  }

  // @DgsData records: returns records field of the corresponding Catalog
  @DgsData(parentType="Catalog", field="records")
  fun records(dfe: DgsDataFetchingEnvironment):Collection<CatalogRecords?>{
    val ct: Catalog? = dfe.getSource()
    return model.searchRecordsForCatalogById(ct!!.id)
  }


  // @DgsData services: returns services field of the corresponding Catalog
  @DgsData(parentType="Catalog", field="services")
  fun services(dfe: DgsDataFetchingEnvironment):Collection<DataService?>{
    val ct: Catalog? = dfe.getSource()
    return model.searchServicesForCatalogById(ct!!.id)
  }

    // @DgsData datasets: returns datasets field of the corresponding Catalog
    @DgsData(parentType="Catalog", field="datasets")
    fun datasets(dfe: DgsDataFetchingEnvironment):Collection<DatasetInCatalog?>{
      val ct: Catalog? = dfe.getSource()
      return model.searchDatasetsForCatalogById(ct!!.id)
    }
  

    // @DgsData resources: returns resources field of the corresponding Catalog
    @DgsData(parentType="Catalog", field="resources")
    fun resources(dfe: DgsDataFetchingEnvironment):Collection<ResourceInCatalog?>{
      val ct: Catalog? = dfe.getSource()
      return model.searchResourcesorCatalogById(ct!!.id)
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
    var dataSeries: DatasetSeries? = model?.get(dS, id) as DatasetSeries?
    return dataSeries
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
    var catalogRecord: CatalogRecords? = model?.get(cR, id) as CatalogRecords?
    return catalogRecord
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
    return model?.get(di, id) as Distribution?
  }

   // @DgsData accessService: returns accessService field of the corresponding Distribution
   @DgsData(parentType="Distribution", field="accessService")
   fun accessService(dfe: DgsDataFetchingEnvironment):Collection<DataService?>{
     val dist: Distribution? = dfe.getSource()
     return model.searchAccessServicesForDistributionById(dist!!.id)
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
    var data:DatasetInCatalog? = model?.get(d, id) as DatasetInCatalog?
    return data
  }
  
   // @DgsData inSeries: returns inSeries field of the corresponding Dataset
   @DgsData(parentType="Dataset", field="inSeries")
   fun inSeries(dfe: DgsDataFetchingEnvironment):Collection<DatasetSeries?>{
     val dic: DatasetInCatalog? = dfe.getSource()
     return when(dic){
      is Dataset -> model.searchInSeriesForDatasetById(dic!!.id)
       else -> listOf()
     }
   }

  // @DgsData distributions: returns distributions field of the corresponding Dataset
  @DgsData(parentType="Dataset", field="distributions")
  fun distributions(dfe: DgsDataFetchingEnvironment):Collection<Distribution?>{
    val dic: DatasetInCatalog? = dfe.getSource()
    return when(dic){
      is Dataset -> model.searchDistributionsForDatasetById(dic!!.id)
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
    return model?.get(dSe, id) as DataService?
  }

  // @DgsData servesDataset: returns servesDataset field of the corresponding DataService
  @DgsData(parentType="DataService", field="servesDataset")
  fun servesDataset(dfe: DgsDataFetchingEnvironment):Collection<DatasetInCatalog?>{
    val dserv: DataService? = dfe.getSource()
    return model.searchServesDatasetForDataServicedById(dserv!!.id)
  }


  //////////////////////////////////////////
  // RESOURCE QUERIES
  //////////////////////////////////////////

  // @DgsQuery resource: returns the resource which id is the @InputArgument id
  @DgsQuery
  fun resource(@InputArgument id: String?): ResourceInCatalog? {
    if (id == null) {
      return null
    }
    var res:ResourceInCatalog? = model?.get(r, id) as ResourceInCatalog?
    return res
  }

 // @DgsQuery resources: returns the resourceInCatalog which id is the @InputArgument id
  @DgsQuery
  fun resources(@InputArgument id: String?): ResourceInCatalog? {
    if (id == null) {
      return null
    }
    var res:ResourceInCatalog? = model?.get(r, id) as ResourceInCatalog?
    return res
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
  
}

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