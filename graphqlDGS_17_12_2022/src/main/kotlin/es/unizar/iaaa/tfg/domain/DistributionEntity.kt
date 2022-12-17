package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Distribution
import javax.persistence.*

@Entity
@Table(name = "distribution")
class DistributionEntity {
    @Id
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String

    @ManyToMany
    @JoinTable(
        name= "acessservice",
        joinColumns = arrayOf(JoinColumn(name="distribution_id")),
        inverseJoinColumns = arrayOf(JoinColumn(name="data_service_id")),
    )
    lateinit var accessService:Collection<DataServiceEntity>

    @ManyToMany(mappedBy="inseries")
    lateinit var distributions:Collection<DatasetEntity>


    fun toDistribution(): Distribution {
        return Distribution(id, title)
    }
}
 