package es.unizar.iaaa.tfg.domain

import lombok.Getter
import lombok.Setter
import java.io.Serializable
import javax.persistence.Column
import javax.persistence.Embeddable

@Getter
@Setter
@Embeddable
class RelationshipsIds : Serializable {

    @Column(name = "id_catalog")
    lateinit var catalog: String

    @Column(name = "id_resource")
    lateinit var resource: String

    companion object {
        private const val serialVersionUID = -5380187288526267611L
    }
}
