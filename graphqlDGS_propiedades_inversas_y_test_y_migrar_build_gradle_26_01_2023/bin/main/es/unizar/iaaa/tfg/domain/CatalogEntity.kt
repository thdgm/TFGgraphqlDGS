package es.unizar.iaaa.tfg.domain

import jakarta.persistence.DiscriminatorValue
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.Table

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
