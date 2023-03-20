package es.unizar.iaaa.tfg.domain.catalogRecord

import es.unizar.iaaa.tfg.domain.resources.CatalogEntity
import es.unizar.iaaa.tfg.domain.resources.ResourceEntity
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table

@Entity
@Table(name = "catalogrecord")
class CatalogRecordEntity {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String

    @Column(nullable = true)
    lateinit var content: String

    @Column(nullable = true)
    lateinit var contentType: String

    @Column(nullable = true)
    lateinit var contentUrl: String

    @ManyToMany(mappedBy = "records")
    lateinit var catalogs: Collection<CatalogEntity>

    @ManyToOne
    lateinit var resource: ResourceEntity
}
