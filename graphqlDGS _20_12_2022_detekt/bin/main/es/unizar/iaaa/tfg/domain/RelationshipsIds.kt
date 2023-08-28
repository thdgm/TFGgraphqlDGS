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

    @Column(name = "id_source")
    lateinit var idSource: String

    @Column(name = "id_target")
    lateinit var idTarget: String

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as RelationshipsIds

        if (idSource != other.idSource) return false
        if (idTarget != other.idTarget) return false

        return true
    }

    override fun hashCode(): Int {
        var result = idSource.hashCode()
        result = 31 * result + idTarget.hashCode()
        return result
    }

    override fun toString(): String {
        return "relationshipsIds(idSource='$idSource', idTarget='$idTarget')"
    }

    companion object {
        private const val serialVersionUID = -5380187288526267611L
    }
}
