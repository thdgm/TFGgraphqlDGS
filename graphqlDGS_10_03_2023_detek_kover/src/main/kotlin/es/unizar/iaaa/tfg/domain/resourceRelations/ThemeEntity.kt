package es.unizar.iaaa.tfg.domain.resourceRelations

import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.Table

@Entity
@Table(name = "theme")
class ThemeEntity {
    @Id
    lateinit var id: String

    /*@ManyToOne
    @JoinColumn(name = "resourceId")
    lateinit var resource: ResourceEntity*/

    @ManyToMany
    @JoinTable(
      name = "themesResources",
      joinColumns = [JoinColumn(name = "id_theme")],
      inverseJoinColumns = [JoinColumn(name = "id_resource")],
    )
    lateinit var resources: MutableCollection<ResourceEntity>


}
