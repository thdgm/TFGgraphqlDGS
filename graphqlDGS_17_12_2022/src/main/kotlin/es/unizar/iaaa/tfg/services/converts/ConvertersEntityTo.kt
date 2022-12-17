package es.unizar.iaaa.tfg.services.converts

import com.graphqlDGS.graphqlDGS.model.types.DataService
import es.unizar.iaaa.tfg.domain.DataServiceEntity
import org.springframework.stereotype.Service

@Service
class ConvertersEntityTo {
    fun toDataServices(dse: Collection<DataServiceEntity?>):Collection<DataService?>{
        var ds = listOf <DataService?>()
        dse.forEach{
            ds += it?.toDataService()
        }
        return ds
    }
}