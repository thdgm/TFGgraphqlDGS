package es.unizar.iaaa.tfg.services.jsonServices

import es.unizar.iaaa.tfg.jsonDataModels.AccrualPeriodicityJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.DatasetJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.DistributionJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ImtJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.ModelJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PeriodOfTimeJsonMapping
import es.unizar.iaaa.tfg.jsonDataModels.PublisherJsonMapping
import org.apache.commons.validator.routines.UrlValidator
import org.json.JSONArray
import org.json.JSONObject
import org.springframework.core.io.ResourceLoader
import org.springframework.stereotype.Service

/*
 * These services help to process JSON file in order to map all the needed
 * metadata. Then, another services will create the corresponding objects.
 */

interface ProcessCsvServices {
    fun processCsv():  Any
}

@Service
class ProcessCsvServicesImpl(


    ) : ProcessCsvServices {




    override fun processCsv(): Any  {
       return ""
    }


}

