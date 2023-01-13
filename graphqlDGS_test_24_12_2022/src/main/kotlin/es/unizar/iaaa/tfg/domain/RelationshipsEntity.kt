package es.unizar.iaaa.tfg.domain

import java.io.Serializable
import javax.persistence.Column
import javax.persistence.EmbeddedId
import javax.persistence.Entity
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.MapsId
import javax.persistence.Table

@Entity
@Table(name = "relationships")
class RelationshipsEntity : Serializable {

    companion object {
        private const val serialVersionUID: Long = 123
    }

    @EmbeddedId
    lateinit var id: RelationshipsIds

    @ManyToOne
    @JoinColumn(name = "id_catalog")
    @MapsId("catalog")
    lateinit var catalog: CatalogEntity

    @ManyToOne
    @JoinColumn(name = "id_resource")
    @MapsId("resource")
    lateinit var resource: ResourceEntity

    @Column(name = "resourceType")
    lateinit var types: String
}
