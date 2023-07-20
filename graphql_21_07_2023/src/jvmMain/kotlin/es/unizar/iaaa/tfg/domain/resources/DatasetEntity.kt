package es.unizar.iaaa.tfg.domain.resources

import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.KeywordEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.LocationEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.RegulationsEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.RelatedResourcesEntity
import jakarta.persistence.Column
import jakarta.persistence.DiscriminatorValue
import jakarta.persistence.Entity
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.OneToMany
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

    @Column(nullable = true)
    open var validity: LocalDateTime? = null

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
    lateinit var distributionsDataset: MutableCollection<DistributionEntity>

    @ManyToMany(mappedBy = "datasets")
    open lateinit var regulations: MutableCollection<RegulationsEntity>

    @ManyToMany(mappedBy = "datasets")
    open lateinit var relatedResources: MutableCollection<RelatedResourcesEntity>

    @OneToMany(mappedBy = "dataset")
    open lateinit var keywords: Collection<KeywordEntity>
}
