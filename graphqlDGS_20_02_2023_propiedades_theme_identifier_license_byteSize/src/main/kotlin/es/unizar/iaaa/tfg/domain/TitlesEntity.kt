package es.unizar.iaaa.tfg.domain

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table

@Entity
@Table(name = "titles")
class TitlesEntity {
    @Id
    lateinit var title: String

  /*  @ManyToOne
    @JoinColumn(name = "languageId", nullable = true)
    lateinit var language: LanguageEntity*/
    @ManyToMany(mappedBy = "titles")
    open lateinit var languagesResources: MutableCollection<LanguageEntity>

    @ManyToOne
    @JoinColumn(name = "resourceId", referencedColumnName = "id", nullable = true)
    lateinit var resourceTitle: ResourceEntity

    @ManyToOne
    @JoinColumn(name = "distributionId", referencedColumnName = "id", nullable = true)
    lateinit var distributionTitle: DistributionEntity
}
