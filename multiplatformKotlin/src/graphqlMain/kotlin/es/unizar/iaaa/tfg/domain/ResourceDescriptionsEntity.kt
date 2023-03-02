package es.unizar.iaaa.tfg.domain

import jakarta.persistence.EmbeddedId
import jakarta.persistence.Entity
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.MapsId
import jakarta.persistence.Table

@Entity
@Table(name = "description")
class ResourceDescriptionsEntity {
    /*@Id
    @Column(length = 2000)
    lateinit var text: String*/
    @EmbeddedId
    lateinit var id: ResourceDescriptionId

    @ManyToMany(mappedBy = "descriptions")
    open lateinit var languagesResources: MutableCollection<LanguageEntity>

    /*
    @ManyToOne
    @JoinColumn(name = "languageId", nullable = true)
    lateinit var language: LanguageEntity
    */

   /* @ManyToOne
    @JoinColumn(name = "resourceId", referencedColumnName = "id", nullable = true)*/
   @ManyToOne
   @JoinColumn(name = "id_resource",referencedColumnName="id")
   @MapsId(value="id_resource")
    lateinit var resource: ResourceEntity
}
