package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import com.graphqlDGS.graphqlDGS.model.types.CatalogRecords
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "catalogrecord")
class CatalogRecordEntity {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String

    fun toCatalogRecords(): CatalogRecords? {
        return CatalogRecords(id, title, Catalog("catalog1", "catalogTit1"))
    }
}
