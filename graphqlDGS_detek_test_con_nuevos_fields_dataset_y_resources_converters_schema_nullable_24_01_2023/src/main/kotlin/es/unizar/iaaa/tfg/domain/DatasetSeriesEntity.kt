package es.unizar.iaaa.tfg.domain

import java.io.Serializable
import javax.persistence.DiscriminatorValue
import javax.persistence.Entity
import javax.persistence.ManyToMany
import javax.persistence.Table

// @PrimaryKeyJoinColumn(name = "dataset_series_id")
@Entity
@Table(name = "datasetseries")
@DiscriminatorValue("dataset_series")
class DatasetSeriesEntity : ResourceEntity(), Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }

    @ManyToMany(mappedBy = "inseries")
    lateinit var dataset: Collection<DatasetEntity>
}
