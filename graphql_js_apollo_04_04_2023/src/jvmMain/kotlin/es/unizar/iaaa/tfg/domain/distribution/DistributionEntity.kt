package es.unizar.iaaa.tfg.domain.distribution

import com.graphqlDGS.graphqlDGS.model.types.Distribution
import es.unizar.iaaa.tfg.domain.resourceRelations.IdentifierEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.OneToMany
import jakarta.persistence.Table
import jakarta.validation.constraints.Min

/*
 * Entity of Distribution type.
 */
@Entity
@Table(name = "distribution")
class DistributionEntity {
    @Id
    lateinit var id: String

    @Column(nullable = true)
    lateinit var accessUrl: String

    @Column(nullable = true)
    @Min(0)
    var byteSize: UInt = 0u

    @Column(nullable = true)
    var format: String? = null

    /*@Column(nullable = true)
    lateinit var identifier: String*/

    //@OneToOne(mappedBy = "distributionTitle")
    //lateinit var title: Collection<TitlesEntity>

    @OneToMany(mappedBy = "distribution")
    lateinit var identifiers: Collection<IdentifierEntity>

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "acessservice",
        joinColumns = [JoinColumn(name = "distribution_id")],
        inverseJoinColumns = [JoinColumn(name = "data_service_id")],
    )
    lateinit var accessService: Collection<DataServiceEntity>

   /* @ManyToMany(mappedBy="inseries")
    lateinit var distributions:Collection<DatasetEntity>*/
    @ManyToMany(mappedBy = "distributions")
    lateinit var datasets: Collection<DatasetEntity>


    fun toDistribution() = Distribution(id)
}
