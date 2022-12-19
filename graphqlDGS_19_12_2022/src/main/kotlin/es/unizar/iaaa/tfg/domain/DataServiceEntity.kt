package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.DataService
import java.io.Serializable
import javax.persistence.*


@Entity
@Table(name = "dataservice")
@DiscriminatorValue("not null")

//@PrimaryKeyJoinColumn(name = "data_service_id")
class DataServiceEntity:ResourceEntity(), Serializable {

    @ManyToMany(mappedBy="accessService")
    lateinit var distributions:Collection<DistributionEntity>

    @OneToMany(mappedBy = "datasetService") //PONER QUE EL TYPE DE ResourceEntity SEA DATASET|CATALOG|DATASERIES
    val servesDataset:Collection<ResourceEntity> = listOf()

    fun getDatasets():Collection<ResourceEntity>{
        return servesDataset
    }
    fun toDataService(): DataService? {
        return DataService(id, title)
    }
}
