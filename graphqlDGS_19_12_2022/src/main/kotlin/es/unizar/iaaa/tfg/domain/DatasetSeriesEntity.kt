package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.DatasetSeries
import java.io.Serializable
import javax.persistence.*

@Entity
@Table(name = "datasetseries")
@DiscriminatorValue("not null")

@PrimaryKeyJoinColumn(name = "dataset_series_id")
class DatasetSeriesEntity:ResourceEntity(), Serializable {

    @ManyToMany(mappedBy="inseries")
    lateinit var dataset:Collection<DatasetEntity>
    fun toDatasetSeries(): DatasetSeries? {
        return DatasetSeries(id, title)
    }
}
