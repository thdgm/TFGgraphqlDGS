package es.unizar.iaaa.tfg.domain

import jakarta.persistence.DiscriminatorValue
import jakarta.persistence.Entity
import jakarta.persistence.ManyToMany
import jakarta.persistence.Table
import java.io.Serializable

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
