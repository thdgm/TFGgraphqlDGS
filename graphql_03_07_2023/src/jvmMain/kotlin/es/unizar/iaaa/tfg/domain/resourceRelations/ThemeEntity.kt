package es.unizar.iaaa.tfg.domain.resourceRelations

import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.Table

/*
 * Entity of ResourceDescription. One ResourceEntity can have many descriptions.
 * The id is ResourceDescriptionId, composed by the description value and the related ResourceEntity id.
 * This entity also has manyTomany relation with LanguageEntity, since descriptions have language.
 */
@Entity
@Table(name = "theme")
class ThemeEntity {
    @Id
    lateinit var id: String

    @ManyToMany
    @JoinTable(
      name = "themesResources",
      joinColumns = [JoinColumn(name = "id_theme")],
      inverseJoinColumns = [JoinColumn(name = "id_resource")],
    )
    lateinit var resources: MutableCollection<ResourceEntity>


}
