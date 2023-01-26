package es.unizar.iaaa.tfg.domain

import jakarta.persistence.DiscriminatorValue
import jakarta.persistence.Entity
import jakarta.persistence.ManyToMany
import jakarta.persistence.OneToMany
import jakarta.persistence.Table
import java.io.Serializable
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
}
