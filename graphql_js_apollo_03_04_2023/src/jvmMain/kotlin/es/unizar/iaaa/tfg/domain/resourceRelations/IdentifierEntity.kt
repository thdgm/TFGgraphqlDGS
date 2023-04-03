package es.unizar.iaaa.tfg.domain.resourceRelations

import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table

/*
 * Entity of Identifier. One ResourceEntity as well as one DistributionEntity have many identifiers.
 */
@Entity
@Table(name = "identifier")
class IdentifierEntity {
    @Id
    @Column(length = 500)
    lateinit var id: String

    @ManyToOne
    @JoinColumn(name = "resourceId",nullable = true)
    lateinit var resource: ResourceEntity

    @ManyToOne
    @JoinColumn(name = "distributionId", nullable = true)
    lateinit var distribution: DistributionEntity

}
