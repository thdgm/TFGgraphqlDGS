package es.unizar.iaaa.tfg.domain.resourceRelations

import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.OneToMany
import jakarta.persistence.Table

/*
 * Entity of Publisher. Many ResourceEntity can have one publisher.
 *
 */
@Entity
@Table(name = "publisher")
class PublisherEntity {
    @Id
    lateinit var id: String

    @Column(nullable = true)
    lateinit var notation: String

    @Column(nullable = true)
    lateinit var label: String

    @OneToMany(mappedBy = "publisher")
    lateinit var resources: MutableCollection<ResourceEntity>

}
