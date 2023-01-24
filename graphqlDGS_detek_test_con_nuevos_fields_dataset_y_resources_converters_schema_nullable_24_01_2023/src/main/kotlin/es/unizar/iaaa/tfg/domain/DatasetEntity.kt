package es.unizar.iaaa.tfg.domain

import java.io.Serializable
import java.util.Date
import javax.persistence.Column
import javax.persistence.DiscriminatorValue
import javax.persistence.Entity
import javax.persistence.JoinColumn
import javax.persistence.JoinTable
import javax.persistence.ManyToMany
import javax.persistence.Table

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
}
