package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import java.io.Serializable
import javax.persistence.DiscriminatorValue
import javax.persistence.Entity
import javax.persistence.ManyToMany
import javax.persistence.PrimaryKeyJoinColumn
import javax.persistence.Table

@Entity
@Table(name = "datasetseries")
@DiscriminatorValue("not null")
@PrimaryKeyJoinColumn(name = "dataset_series_id")
class DatasetSeriesEntity : ResourceEntity(), Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }

    @ManyToMany(mappedBy = "inseries")
    lateinit var dataset: Collection<DatasetEntity>
    fun toDatasetSeries(): DatasetSeries? {
        return DatasetSeries(id, title)
    }
}
