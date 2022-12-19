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
    @JoinColumn(name = "idSource")
    @MapsId("idSource")
    lateinit var idSource: CatalogEntity

    @ManyToOne
    @JoinColumn(name = "idTarget")
    @MapsId("idTarget")
    lateinit var idTarget: ResourceEntity

    @Column(name = "target_type")
    lateinit var types: String
}
