package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Distribution
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.JoinTable
import javax.persistence.ManyToMany
import javax.persistence.Table
@Entity
@Table(name = "distribution")
class DistributionEntity {
    @Id
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String

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

    fun toDistribution(): Distribution {
        return Distribution(id, title)
    }
}
