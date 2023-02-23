package es.unizar.iaaa.tfg.domain

import jakarta.persistence.EmbeddedId
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.MapsId
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
