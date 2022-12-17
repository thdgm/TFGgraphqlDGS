package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.DataService
import java.io.Serializable
import javax.persistence.*


/*@Embeddable
class MultipleId : Serializable {
    lateinit var id_service: String
    lateinit var distribution_id: String

    companion object {
        private const val serialVersionUID = 4709512937482224835L
    }
}*/
@Entity
@Table(name = "dataservice")
@PrimaryKeyJoinColumn(name = "data_service_id")
class DataServiceEntity:ResourceEntity(), Serializable {

    /*@EmbeddedId
    lateinit var id: MultipleId*/
    /*@Id
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String*/
    @ManyToMany(mappedBy="accessService")
    lateinit var distributions:Collection<DistributionEntity>
    fun toDataService(): DataService? {
        return DataService(id, title)
    }
}
