package es.unizar.iaaa.tfg.domain.resources

import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.LocationEntity
import jakarta.persistence.Column
import jakarta.persistence.DiscriminatorValue
import jakarta.persistence.Entity
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import java.io.Serializable
import java.time.LocalDateTime

/*
 * Entity of Dataset. Inherit from ResourceEntity.
 */
@Entity
@DiscriminatorValue("dataset")
class DatasetEntity : ResourceEntity(), Serializable {

    companion object {
        private const val serialVersionUID: Long = 123
    }

    @Column(nullable = true)
    var accrualPeriodicity: String? = null

    @Column(nullable = true)
    var temporalCoverageStart: LocalDateTime? = null

    @Column(nullable = true)
    var temporalCoverageEnd: LocalDateTime? = null

    @ManyToMany(mappedBy = "datasets")
    lateinit var locations: MutableCollection<LocationEntity>

    @ManyToMany
    @JoinTable(
        name = "inseries",
        joinColumns = [JoinColumn(name = "dataset_id")],
        inverseJoinColumns = [JoinColumn(name = "data_series_id")],
    )
    lateinit var inseries: MutableCollection<DatasetSeriesEntity>

    @ManyToMany
    @JoinTable(
        name = "distributions",
        joinColumns = [JoinColumn(name = "dataset_id")],
        inverseJoinColumns = [JoinColumn(name = "distribution_id")],
    )
    lateinit var distributions: MutableCollection<DistributionEntity>
}
