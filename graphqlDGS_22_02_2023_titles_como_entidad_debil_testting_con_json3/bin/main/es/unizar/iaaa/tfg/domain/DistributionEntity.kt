package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Distribution
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.OneToMany
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import jakarta.validation.constraints.Min

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
    lateinit var format: String

    @Column(nullable = true)
    lateinit var identifier: String

    //@OneToOne(mappedBy = "distributionTitle")
    //lateinit var title: Collection<TitlesEntity>

    @ManyToMany
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
