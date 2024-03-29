package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import javax.persistence.*

// @PrimaryKeyJoinColumn(name = "catalog_id")
@Entity
@Table(name = "catalog")
@DiscriminatorValue("catalog")
class CatalogEntity : ResourceEntity() {

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "cataloginrecord",
        joinColumns = [JoinColumn(name = "id_resource")],
        inverseJoinColumns = [JoinColumn(name = "id_catalog_record")],
    )
    lateinit var records: Collection<CatalogRecordEntity>

    @ManyToMany(mappedBy = "catalogResources")
    lateinit var resourcesCatalog: MutableCollection<ResourceEntity>

    override fun toString() = "Catalog[id = $id, title = $title]"

    fun toCatalog() = Catalog(id, title)
}
