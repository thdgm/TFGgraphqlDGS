package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.Dataset
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "dataset")
class DatasetEntity {
    @Id
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String

    fun toDataset(): Dataset? {
        return Dataset(id, title)
    }
}
