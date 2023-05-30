package es.unizar.iaaa.tfg.domain.resources

import jakarta.persistence.DiscriminatorValue
import jakarta.persistence.Entity
import jakarta.persistence.ManyToMany
import java.io.Serializable

/*
 * Entity of DatasetSeries. Inherit from ResourceEntity.
 */
@Entity
@DiscriminatorValue("dataset_series")
class DatasetSeriesEntity : ResourceEntity(), Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }

    @ManyToMany(mappedBy = "inseries")
    lateinit var dataset: Collection<DatasetEntity>
}
