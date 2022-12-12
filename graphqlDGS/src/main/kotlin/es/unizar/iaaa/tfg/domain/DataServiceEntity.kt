package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.DataService
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "dataservice")
class DataServiceEntity {
    @Id
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String

    fun toDataService(): DataService? {
        return DataService(id, title)
    }
}
