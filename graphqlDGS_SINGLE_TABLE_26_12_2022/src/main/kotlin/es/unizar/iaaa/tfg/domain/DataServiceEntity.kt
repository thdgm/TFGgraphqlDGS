package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.DataService
import java.io.Serializable
import javax.persistence.DiscriminatorValue
import javax.persistence.Entity
import javax.persistence.ManyToMany
import javax.persistence.OneToMany
import javax.persistence.Table
@Entity
@Table(name = "dataservice")
@DiscriminatorValue("data_service")
class DataServiceEntity : ResourceEntity(), Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }

    @ManyToMany(mappedBy = "accessService")
    lateinit var distributions: Collection<DistributionEntity>

    @OneToMany(mappedBy = "datasetService") // PONER QUE EL TYPE DE ResourceEntity SEA DATASET|CATALOG|DATASERIES
    val servesDataset: Collection<ResourceEntity> = listOf()

    fun toDataService() = DataService(id, title)

}
