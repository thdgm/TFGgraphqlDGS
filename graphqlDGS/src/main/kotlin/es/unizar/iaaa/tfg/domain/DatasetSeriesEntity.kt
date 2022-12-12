package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table
@Entity
@Table(name = "datasetseries")
class DatasetSeriesEntity {

    @Id
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String

    fun toDatasetSeries(): DatasetSeries? {
        return DatasetSeries(id, title)
    }
}
