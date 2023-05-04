package es.unizar.iaaa.tfg.domain.resources

import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import jakarta.persistence.DiscriminatorValue
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import java.io.Serializable

/*
 * Entity of DataService. Inherit from ResourceEntity.
 */
@Entity
@DiscriminatorValue("data_service")
class DataServiceEntity : ResourceEntity(), Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }

    @ManyToMany(mappedBy = "accessService")
    lateinit var distributions: Collection<DistributionEntity>

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "servesDataset",
        joinColumns = [JoinColumn(name = "id_dataservice")],
        inverseJoinColumns = [JoinColumn(name = "id_resource")],
    )
    lateinit var servesDataset: MutableCollection<ResourceEntity>
}
