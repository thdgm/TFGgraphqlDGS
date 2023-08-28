package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import java.io.Serializable
import javax.persistence.*

@Entity
@Table(name = "catalog")
@DiscriminatorValue("not null")
@PrimaryKeyJoinColumn(name = "catalog_id")
class CatalogEntity:ResourceEntity(), Serializable {

    @OneToMany(mappedBy = "id_source")
    lateinit var relationshipsSource: Collection<RelationshipsEntity>

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
