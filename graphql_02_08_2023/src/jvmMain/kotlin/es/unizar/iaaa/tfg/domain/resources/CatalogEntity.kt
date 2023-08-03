package es.unizar.iaaa.tfg.domain.resources

import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
import jakarta.persistence.DiscriminatorValue
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany

/*
 * Entity of Catalog. Inherit from ResourceEntity.
 */
@Entity
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

}
