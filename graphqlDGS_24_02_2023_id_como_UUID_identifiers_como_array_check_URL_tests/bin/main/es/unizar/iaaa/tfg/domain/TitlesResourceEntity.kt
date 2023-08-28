package es.unizar.iaaa.tfg.domain

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.EmbeddedId
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.MapsId
import jakarta.persistence.OneToOne
import jakarta.persistence.PrimaryKeyJoinColumn
import jakarta.persistence.Table

@Entity
@Table(name = "titles_resource")
class TitlesResourceEntity {

    @EmbeddedId
    lateinit var id: TitleResourceId

    @ManyToOne
    @JoinColumn(name = "id_resource",referencedColumnName="id")
    @MapsId(value="id_resource")
    lateinit var resourceTitle: ResourceEntity

    @ManyToMany(mappedBy = "titlesResource")
    lateinit var languagesResources: MutableCollection<LanguageEntity>

    /*@ManyToOne
    @JoinColumn(name = "languageId", nullable = true)
    lateinit var language: LanguageEntity*/




}
