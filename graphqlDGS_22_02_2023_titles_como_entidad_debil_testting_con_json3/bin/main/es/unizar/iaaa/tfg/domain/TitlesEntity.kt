package es.unizar.iaaa.tfg.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToOne
import jakarta.persistence.PrimaryKeyJoinColumn
import jakarta.persistence.Table

@Entity
@Table(name = "titles")
class TitlesEntity {
    @Id
    @Column(length = 2000)
    lateinit var title: String

  /*  @ManyToOne
    @JoinColumn(name = "languageId", nullable = true)
    lateinit var language: LanguageEntity*/
    @ManyToMany(mappedBy = "titles")
    open lateinit var languagesResources: MutableCollection<LanguageEntity>

    @ManyToOne
    @JoinColumn(name = "resourceId", referencedColumnName = "id", nullable = true)
    lateinit var resourceTitle: ResourceEntity


    @OneToOne
    @PrimaryKeyJoinColumn(name = "distribution_id", referencedColumnName = "id")
    lateinit var distributionTitle: DistributionEntity
}
