package es.unizar.iaaa.tfg.domain

import jakarta.persistence.EmbeddedId
import jakarta.persistence.Entity
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.MapsId
import jakarta.persistence.Table

@Entity
@Table(name = "titles_distribution")
class TitlesDistributionEntity {

    @EmbeddedId
    lateinit var id: TitleDistributionId

    @ManyToOne
    @JoinColumn(name = "id_distribution",referencedColumnName="id")
    @MapsId(value="id_distribution")
    lateinit var distributionTitle: DistributionEntity

    @ManyToMany(mappedBy = "titlesDistribution")
    lateinit var languagesResources: MutableCollection<LanguageEntity>




}
