package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Catalog
import javax.persistence.*

@Entity
@Table(name = "catalog")
@DiscriminatorValue("not null")
@PrimaryKeyJoinColumn(name = "catalog_id")
class CatalogEntity : ResourceEntity() {

    @OneToMany(mappedBy = "catalog")
    lateinit var resourcesOfCatalog: Collection<RelationshipsEntity>

    @ManyToMany
    @JoinTable(
        name = "cataloginrecord",
        joinColumns = [JoinColumn(name = "id_resource")],
        inverseJoinColumns = [JoinColumn(name = "id_catalog_record")],
    )
    lateinit var records: Collection<CatalogRecordEntity>

    override fun toString() = "Catalog[id = $id, title = $title]"

    fun toCatalog() = Catalog(id, title)
}
