package com.graphqlDGS.graphqlDGS.Services
import org.springframework.stereotype.Service
import javax.annotation.PostConstruct
import com.graphqlDGS.graphqlDGS.Enum.Properties


interface GetFieldService{
  fun loadCatalogs(id_source:String,property:String):Collection<String?>
  fun loadDistributions(id_source:String,property:String):Collection<String?>
  fun loadServices(id_source:String,property:String):Collection<String?>
  fun loadDatasets(id_source:String,property:String):Collection<String?>
}

@Service
class GetFieldsService:GetFieldService{



  // Fields de los catalogs: <id_source, <id_target,property>> -> resources,datasets,services,catalogs,records
  private val catalogFields =  mutableMapOf<String, MutableMap<String, String>>()

  // Fields de los distribution: <id_source, <id_target,property>> -> accessService
  private val distributionFields = mutableMapOf<String,MutableMap<String, String>>()

  // Fields de los dataService: <id_source, <id_target,property>> -> servesDataset
  private val dataServiceFields = mutableMapOf<String,MutableMap<String, String>>()

  // Fields de los dataset: <id_source, <id_target,property>> -> inSeries y distributions
  private val dataset = mutableMapOf<String,MutableMap<String, String>>()

  @PostConstruct
  fun init(){

    setCatalogFields()
    setDistributionsFields()
    setDataServiceFields()
    setDatasetFields()
    
  }

  fun setCatalogFields(){
    catalogFields["catalog1"] = mutableMapOf()
    catalogFields.forEach{(_,v)->
      v["catalog1"] = Properties.CATALOGS.n
      v["cR1"] = Properties.RECORDS.n
      v["cR2"] = Properties.RECORDS.n
      v["cR3"] = Properties.RECORDS.n
      v["cR4"] = Properties.RECORDS.n
      v["dSer1"] = Properties.SERVICES.n
      v["d1"] = Properties.DATSETS.n
      v["dS1"] = Properties.DATASERIES.n
    }
    println("CATALOG FIELDDDDDDDDDSSSSSSSSSSSSS")
    println(catalogFields)
  }

  fun setDistributionsFields(){
    distributionFields["Dist1"] = mutableMapOf()
    distributionFields["Dist2"] = mutableMapOf()
    distributionFields["Dist3"] = mutableMapOf()
    distributionFields.forEach{(_,v)->
      v["dSer1"] = Properties.ACCESSSERVICE.n
    }
    println("DISTRIBUTIONNN FIELDDDDDDDDDSSSSSSSSSSSSS")
    println(distributionFields)
    }

  fun setDataServiceFields(){
    dataServiceFields["dSer1"] = mutableMapOf()
    dataServiceFields.forEach{(_,v)->
      v["d1"] = Properties.DATSETS.n
      v["catalog1"] = Properties.CATALOGS.n
      v["dS1"] = Properties.DATASERIES.n
    }
    println("DATASERVICEEESSS FIELDDDDDDDDDSSSSSSSSSSSSS")
    println(dataServiceFields)
  }

  fun setDatasetFields(){
    dataset["d1"] = mutableMapOf()
    dataset.forEach{(_,v)->
      v["dS1"] = Properties.INSERIES.n
      v["Dist1"] = Properties.DISTRIBUTIONS.n
      v["Dist2"] = Properties.DISTRIBUTIONS.n
      v["Dist3"] = Properties.DISTRIBUTIONS.n
    }
    println("DATASEEETTTTSSSS FIELDDDDDDDDDSSSSSSSSSSSSS")
    println(dataset)
  }

  // Return catalog properties of id_source according the parameter property
  override fun loadCatalogs(id_source:String,property:String):Collection<String?>{
    val m1 = catalogFields.filter{(k,_)-> k == id_source}.values.elementAt(0)
    return m1.filter { (_,v) -> v == property }.keys
  }
  // Return distribution properties of id_source according the parameter property
  override fun loadDistributions(id_source:String,property:String):Collection<String?>{
    val m1 = distributionFields.filter{(k,_)-> k == id_source}.values.elementAt(0)
    return m1.filter { (_,v) -> v == property }.keys
  }
  // Return services properties of id_source according the parameter property
  override fun loadServices(id_source:String,property:String):Collection<String?>{
    val m1 = dataServiceFields.filter{(k,_)-> k == id_source}.values.elementAt(0)
    return m1.filter { (_,v) -> v == property }.keys
  }
  // Return datasets properties of id_source according the parameter property
  override fun loadDatasets(id_source:String,property:String):Collection<String?>{
    val m1 = dataset.filter{(k,_)-> k == id_source}.values.elementAt(0)
    return m1.filter { (_,v) -> v == property }.keys
  }


}


