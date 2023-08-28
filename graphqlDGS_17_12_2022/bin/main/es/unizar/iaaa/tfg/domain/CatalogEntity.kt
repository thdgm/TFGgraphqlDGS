package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import java.io.Serializable
import javax.persistence.*

@Entity
@Table(name = "catalog")
@PrimaryKeyJoinColumn(name = "catalog_id")
class CatalogEntity:ResourceEntity(), Serializable {

    /*@Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String*/

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
