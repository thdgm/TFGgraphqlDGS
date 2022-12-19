package es.unizar.iaaa.tfg.domain

import java.io.Serializable
import javax.persistence.*

@Entity
@Table(name = "cataloginrecord")
class CatalogInRecordEntity: Serializable {
    @EmbeddedId
    lateinit var id: CatalogInRecordIds

    @ManyToOne
    @JoinColumn(name="id_resource")
    @MapsId("id_resource")
    lateinit var resourceId:CatalogEntity

    @ManyToOne
    @JoinColumn(name="id_catalog_record")
    @MapsId("id_catalog_record")
    lateinit var catalogRecordId:CatalogRecordEntity
}