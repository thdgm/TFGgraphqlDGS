package es.unizar.iaaa.tfg.domain

import java.io.Serializable
import java.util.*
import javax.persistence.*

// @PrimaryKeyJoinColumn(name = "dataset_id")
@Entity
@Table(name = "dataset")
@DiscriminatorValue("dataset")
class DatasetEntity : ResourceEntity(), Serializable {

    companion object {
        private const val serialVersionUID: Long = 123
    }

    @Column(nullable = true)
    val accrualPeriodicity: String? = null

    @Column(nullable = true)
    val temporalCoverageStart: Date? = null

    @Column(nullable = true)
    val temporalCoverageEnd: Date? = null

    @ManyToMany(mappedBy = "datasets")
    lateinit var keywords: MutableCollection<KeywordEntity>

    @ManyToMany(mappedBy = "datasets")
    lateinit var locations: MutableCollection<LocationEntity>

    @ManyToMany
    @JoinTable(
        name = "inseries",
        joinColumns = [JoinColumn(name = "dataset_id")],
        inverseJoinColumns = [JoinColumn(name = "data_series_id")],
    )
    lateinit var inseries: Collection<DatasetSeriesEntity>

    @ManyToMany
    @JoinTable(
        name = "distributions",
        joinColumns = [JoinColumn(name = "dataset_id")],
        inverseJoinColumns = [JoinColumn(name = "distribution_id")],
    )
    lateinit var distributions: Collection<DistributionEntity>

    // fun toDataset() = Dataset(id, title, fechaHoraCreacion = fechaHoraCreacion.toString(), ultimaModificacion =fechaHoraCreacion.toString())
}
