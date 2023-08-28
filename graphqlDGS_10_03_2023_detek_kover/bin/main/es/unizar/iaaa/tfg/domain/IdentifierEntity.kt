package es.unizar.iaaa.tfg.domain

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table

@Entity
@Table(name = "identifier")
class IdentifierEntity {
    @Id
    lateinit var id: String

    @ManyToOne
    @JoinColumn(name = "resourceId",nullable = true)
    lateinit var resource: ResourceEntity

    @ManyToOne
    @JoinColumn(name = "distributionId", nullable = true)
    lateinit var distribution: DistributionEntity

}
