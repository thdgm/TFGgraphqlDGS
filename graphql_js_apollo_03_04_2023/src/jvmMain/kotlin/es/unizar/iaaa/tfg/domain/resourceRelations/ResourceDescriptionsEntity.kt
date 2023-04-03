package es.unizar.iaaa.tfg.domain.resourceRelations

import es.unizar.iaaa.tfg.domain.ids.ResourceDescriptionId
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import jakarta.persistence.EmbeddedId
import jakarta.persistence.Entity
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.MapsId
import jakarta.persistence.Table

/*
 * Entity of ResourceDescription. One ResourceEntity can have many descriptions.
 * The id is ResourceDescriptionId, composed by the description value and the related ResourceEntity id.
 * This entity also has manyTomany relation with LanguageEntity, since descriptions have language.
 */
@Entity
@Table(name = "description")
class ResourceDescriptionsEntity {

    @EmbeddedId
    lateinit var id: ResourceDescriptionId

    @ManyToMany(mappedBy = "descriptions")
    open lateinit var languagesResources: MutableCollection<LanguageEntity>

    @ManyToOne
    @JoinColumn(name = "id_resource",referencedColumnName="id")
    @MapsId(value="id_resource")
    lateinit var resource: ResourceEntity
}
