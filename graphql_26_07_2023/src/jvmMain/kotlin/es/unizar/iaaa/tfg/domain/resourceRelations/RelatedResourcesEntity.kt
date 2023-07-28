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
 * Entity of RelatedResources. One DatasetEntity has multiple RelatedResources and vice versa.
 */
@Entity
@Table(name = "related_resources")
class RelatedResourcesEntity {
    @Id
    @Column(length = 1000)
    lateinit var id: String

    @ManyToMany
    @JoinTable(
        name = "resourcesRelated",
        joinColumns = [JoinColumn(name = "id_related_resources")],
        inverseJoinColumns = [JoinColumn(name = "id_dataset")],
    )
    lateinit var datasets: MutableCollection<DatasetEntity>

}
