package es.unizar.iaaa.tfg.domain.resourceRelations

import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table

/*
 * Entity of Regulations. One DatasetEntity has multiple regulations and vice versa.
 */
@Entity
@Table(name = "regulations")
class RegulationsEntity {
    @Id
    @Column(length = 1000)
    lateinit var id: String

    @ManyToMany
    @JoinTable(
        name = "regulationsResources",
        joinColumns = [JoinColumn(name = "id_regulations")],
        inverseJoinColumns = [JoinColumn(name = "id_dataset")],
    )
    lateinit var datasets: MutableCollection<DatasetEntity>

}
