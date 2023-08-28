package es.unizar.iaaa.tfg.domain

import java.io.Serializable
import javax.persistence.EmbeddedId
import javax.persistence.Entity
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.MapsId
import javax.persistence.Table

@Entity
@Table(name = "cataloginrecord")
class CatalogInRecordEntity : Serializable {

    companion object {
        private const val serialVersionUID: Long = 123
    }

    @EmbeddedId
    lateinit var id: CatalogInRecordIds

    @ManyToOne
    @JoinColumn(name = "id_resource")
    @MapsId("id_resource")
    lateinit var resourceId: CatalogEntity

    @ManyToOne
    @JoinColumn(name = "id_catalog_record")
    @MapsId("id_catalog_record")
    lateinit var catalogRecordId: CatalogRecordEntity
}
