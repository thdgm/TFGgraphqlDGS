package es.unizar.iaaa.tfg.domain.ids

import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import java.io.Serializable

/*
 *  Hints is a multivalued attribute of CatalogRecordEntity
 *  Its Key is composed by the value of hints (string) and the primary key of Catalog RecordEntity.
 */
@Embeddable
class HintsId: Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }
    @Column(name="id_hint",nullable=false)
    lateinit var hintId:String
    @Column(name="id_catalog_record",nullable=false)
    lateinit var catalogRecordId:String
}
