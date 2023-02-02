package es.unizar.iaaa.tfg.domain

import jakarta.persistence.DiscriminatorValue
import jakarta.persistence.Entity
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.Table
import java.io.Serializable
@Entity
@DiscriminatorValue("data_service")
class DataServiceEntity : ResourceEntity(), Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }

    @ManyToMany(mappedBy = "accessService")
    lateinit var distributions: Collection<DistributionEntity>

   /* @OneToMany(mappedBy = "datasetService")
    val servesDataset: Collection<ResourceEntity> = listOf()*/

    @ManyToMany
    @JoinTable(
        name = "servesDataset",
        joinColumns = [JoinColumn(name = "id_dataservice")],
        inverseJoinColumns = [JoinColumn(name = "id_resource")],
    )
    lateinit var servesDataset: MutableCollection<ResourceEntity>
}
