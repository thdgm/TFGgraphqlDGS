package com.graphqlDGS.graphqlDGS.data
import com.graphqlDGS.graphqlDGS.model.types.DataService

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecord
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import com.graphqlDGS.graphqlDGS.model.types.Distribution

class ConstructorDat(
    var Data_ServiceC:DataService,
    var DatasetList:List<Dataset>?,
    var CatalogoC:Catalog,
    var Catalog_RecordList: List<CatalogRecord>?,
   /* var DistributionC:Distribution, 
    var Data_SeriesC: DatasetSeries, 
    var DatasetC: Dataset,
    var CatalogoC:Catalog,
    var Catalog_RecordC: CatalogRecord*/
    ){

init{
  println("Init block")
  
  Data_ServiceC.servesDataset =  DatasetList
  CatalogoC.records= Catalog_RecordList
  CatalogoC.services= listOf(Data_ServiceC)
  

  /*CatalogoC.records= Catalog_RecordList
  val listaCatalogs = listOf(CatalogoC)
  var catalogoPrueba:Catalog = CatalogoC
  catalogoPrueba.catalogs= listaCatalogs
  CatalogoC = catalogoPrueba*/
  println("Data service")
  println( Data_ServiceC)
  println("Catalog")
  println( CatalogoC)

}

public fun getDataService():DataService{
  return this.Data_ServiceC
}

public fun getCatalog():Catalog{
  return this.CatalogoC
}
}