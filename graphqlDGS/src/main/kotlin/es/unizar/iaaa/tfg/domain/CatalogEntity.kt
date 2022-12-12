package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "catalog")
class CatalogEntity {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String

    override fun toString(): String {
        return "Catalog[" +
            "id = " + id +
            "title + " + title +
            "]"
    }
    fun toCatalog(): Catalog? {
        return Catalog(id, title)
    }
}
