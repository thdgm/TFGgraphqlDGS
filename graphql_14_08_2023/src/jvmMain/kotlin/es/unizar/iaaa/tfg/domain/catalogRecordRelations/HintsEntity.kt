package es.unizar.iaaa.tfg.domain.catalogRecordRelations

import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
import es.unizar.iaaa.tfg.domain.ids.HintsId
import jakarta.persistence.EmbeddedId
import jakarta.persistence.Entity
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.MapsId
import jakarta.persistence.Table

/*
 * Auxiliary entity of Hints type.
 */
@Entity
@Table(name = "hints")
class HintsEntity {
    @EmbeddedId
    lateinit var id: HintsId

    @ManyToOne
    @JoinColumn(name = "id_catalog_record",referencedColumnName="id")
    @MapsId(value="id_catalog_record")
    lateinit var catalogRecordHints: CatalogRecordEntity

}
