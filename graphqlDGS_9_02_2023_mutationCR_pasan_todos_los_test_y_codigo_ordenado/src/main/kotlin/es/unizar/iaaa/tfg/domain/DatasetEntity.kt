package es.unizar.iaaa.tfg.domain

import jakarta.persistence.Column
import jakarta.persistence.DiscriminatorValue
import jakarta.persistence.Entity
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.Table
import java.io.Serializable
import java.time.LocalDateTime
import java.util.Date

// @PrimaryKeyJoinColumn(name = "dataset_id")
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
    lateinit var keywords: MutableCollection<KeywordEntity>

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
