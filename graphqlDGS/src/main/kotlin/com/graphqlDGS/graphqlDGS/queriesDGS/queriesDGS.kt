package com.graphqlDGS.graphqlDGS.queriesDGS

import com.graphqlDGS.graphqlDGS.data.DatasetTest
import com.graphqlDGS.graphqlDGS.model.types.*
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
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



  // @DgsQuery catalog: returns the catalog which id is the @InputArgument id
  //Busco las propiedades: resources, datasets, services, catalogs, records en ResourceRelations
  //Haría por ejemplo records = getRecords("catalogRecords", id)
  // Esto pilla los id de los records del catalog id y busca en datasetTest los records con ese id
  @DgsQuery
  fun catalog(@InputArgument id: String?): Catalog? {
    if (id == null) {
      return null
    }
    var cat: Catalog? = model?.get(c, id) as Catalog?
    cat?.records = model.searchRecordsForCatalogById(id)
    cat?.catalogs = model.searchCatalogsForCatalogById(id)
    cat?.services = model.searchServicesForCatalogById(id)
    cat?.datasets = model.searchDatasetsForCatalogById(id)  
    cat?.resources = model.searchResourcesorCatalogById(id)
    

     
    for (i in cat?.records.orEmpty()){
      i?.primaryTopic = model.searchPrimaryTopicForCatalogRecordById(i.id)
      iniciarCR(i?.primaryTopic)
    }
    
    return cat
  }


  // @DgsQuery dataSeries: returns the dataSeries which id is the @InputArgument id
  @DgsQuery
  fun dataSeries(@InputArgument id: String?): DatasetSeries? {
    if (id == null) {
      return null
    }
    var dataSeries: DatasetSeries? = model?.get(dS, id) as DatasetSeries?
    return dataSeries
  }


  // @DgsQuery catalogRecord: returns the catalogRecord which id is the @InputArgument id
  @DgsQuery
  fun catalogRecord(@InputArgument id: String?): CatalogRecord? {
    if (id == null) {
      return null
    }
    var catalogRecord: CatalogRecord? = model?.get(cR, id) as CatalogRecord?
    catalogRecord?.primaryTopic = model.searchPrimaryTopicForCatalogRecordById(id)
    iniciarCR(catalogRecord?.primaryTopic)
    return catalogRecord
  }


  // @DgsQuery distribution: returns the distribution which id is the @InputArgument id
  @DgsQuery
  fun distribution(@InputArgument id: String?): Distribution? {
    if (id == null) {
      return null
    }
    var dist:Distribution? = model?.get(di, id) as Distribution?
    // return albums.first { it.id == id }
    dist?.accessService = model.searchAccessServicesForDistributionById(id)
    iniciarDist(dist?.accessService)
    return model?.get(di, id) as Distribution?
  }


  // @DgsQuery dataset: returns the dataset which id is the @InputArgument id
  @DgsQuery
  fun dataset(@InputArgument id: String?): DatasetInCatalog? {
    if (id == null) {
      return null
    }
    var data:DatasetInCatalog? = model?.get(d, id) as DatasetInCatalog?

    when(data){
      is Catalog -> iniciarCatalog(data,id)
      is Dataset -> iniciarDataset(data,id)
    }
    return data
  }
  
  // @DgsQuery dataService: returns the dataService which id is the @InputArgument id
  @DgsQuery
  fun dataService(@InputArgument id: String?): DataService? {
    if (id == null) {
      return null
    }
    var service:DataService? = model?.get(dSe, id) as DataService?
    service?.servesDataset = model.searchServesDatasetForDataServicedById(id)
    return service
  }

  // @DgsQuery resource: returns the resource which id is the @InputArgument id
  @DgsQuery
  fun resource(@InputArgument id: String?): ResourceInCatalog? {
    if (id == null) {
      return null
    }
    var res:ResourceInCatalog? = model?.get(r, id) as ResourceInCatalog?
    when(res){
      is Catalog -> iniciarCatalog(res,id)
      is Dataset -> iniciarDataset(res,id)
      is DataService -> iniciarDataService(res,id)
    }
    return res
  }

 // @DgsQuery resources: returns the resourceInCatalog which id is the @InputArgument id
  @DgsQuery
  fun resources(@InputArgument id: String?): ResourceInCatalog? {
    if (id == null) {
      return null
    }
    var res:ResourceInCatalog? = model?.get(r, id) as ResourceInCatalog?
    when(res){
      is Catalog -> iniciarCatalog(res,id)
      is Dataset -> iniciarDataset(res,id)
      is DataService -> iniciarDataService(res,id)
    }
    return res
  }

  ////////////////////////////
  // FUNCIONES AUXILAIRES, NO ME QUEDA CLARO SI HAY QUE USARLAS
  ////////////////////////////


  // Inicia las propiedades de dataset
  fun iniciarDataset(data:Dataset?,id:String):Dataset?{
    data?.inSeries = model.searchInSeriesForDatasetById(id)
    data?.distributions = model.searchDistributionsForDatasetById(id)
    return data
  }

    // Inicia las propiedades de catalog
  fun iniciarCatalog(cat:Catalog?,id:String):Catalog?{
    cat?.records = model.searchRecordsForCatalogById(id)
    cat?.catalogs = model.searchCatalogsForCatalogById(id)
    cat?.services = model.searchServicesForCatalogById(id)
    cat?.datasets = model.searchDatasetsForCatalogById(id)
    cat?.resources = model.searchResourcesorCatalogById(id)
    return cat
  }

  //Inicia las propiedades de dataService
  fun iniciarDataService(dserv:DataService?,id:String):DataService?{
    dserv?.servesDataset = model.searchServesDatasetForDataServicedById(id)
    return dserv
  }

  // Inicia las propeidades de catalogRecord
  fun iniciarCR(pt: ResourceInCatalog?){
    when(pt){
      is Catalog -> iniciarCatalog(pt,pt.id)
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
  }
  
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