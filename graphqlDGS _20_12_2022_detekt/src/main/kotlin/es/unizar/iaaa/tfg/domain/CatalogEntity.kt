package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import java.io.Serializable
import javax.persistence.DiscriminatorValue
import javax.persistence.Entity
import javax.persistence.OneToMany
import javax.persistence.PrimaryKeyJoinColumn
import javax.persistence.Table

@Entity
@Table(name = "catalog")
@DiscriminatorValue("not null")
@PrimaryKeyJoinColumn(name = "catalog_id")
class CatalogEntity : ResourceEntity(), Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }

    @OneToMany(mappedBy = "idSource")
    lateinit var relationshipsSource: Collection<RelationshipsEntity>

    @OneToMany(mappedBy = "resourceId")
    lateinit var records: Collection<CatalogInRecordEntity>

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
