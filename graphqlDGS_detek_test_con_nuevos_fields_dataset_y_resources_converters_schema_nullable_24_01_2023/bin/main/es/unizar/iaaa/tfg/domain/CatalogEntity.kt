package es.unizar.iaaa.tfg.domain

import javax.persistence.DiscriminatorValue
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.JoinColumn
import javax.persistence.JoinTable
import javax.persistence.ManyToMany
import javax.persistence.Table

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
}
