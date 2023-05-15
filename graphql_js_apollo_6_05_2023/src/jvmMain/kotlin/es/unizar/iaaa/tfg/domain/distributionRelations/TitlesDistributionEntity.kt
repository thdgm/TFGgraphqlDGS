package es.unizar.iaaa.tfg.domain.distributionRelations

import es.unizar.iaaa.tfg.domain.distribution.DistributionEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.LanguageEntity
import es.unizar.iaaa.tfg.domain.ids.TitleDistributionId
import jakarta.persistence.EmbeddedId
import jakarta.persistence.Entity
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.MapsId
import jakarta.persistence.Table

/*
 * Entity for record Distribution titles since one Distribution can have
 * many titles. It is needed the title value and the Distribution key.
 */
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
