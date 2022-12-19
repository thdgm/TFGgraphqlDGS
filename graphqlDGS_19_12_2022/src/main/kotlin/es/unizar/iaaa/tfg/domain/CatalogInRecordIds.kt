package es.unizar.iaaa.tfg.domain

import lombok.Getter
import lombok.Setter
import java.io.Serializable
import javax.persistence.Column
import javax.persistence.Embeddable

@Getter
@Setter
@Embeddable
class CatalogInRecordIds : Serializable {

    @Column(name="id_resource")
    lateinit var resourceId:String

    @Column(name="id_catalog_record")
    lateinit var catalogRecordId:String


    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as CatalogInRecordIds

        if (resourceId != other.resourceId) return false
        if (catalogRecordId != other.catalogRecordId) return false

        return true
    }

    override fun hashCode(): Int {
        var result = resourceId.hashCode()
        result = 31 * result + catalogRecordId.hashCode()
        return result
    }

    override fun toString(): String {
        return "CatalogInRecordIds(resourceId='$resourceId', catalogRecordId='$catalogRecordId')"
    }


}