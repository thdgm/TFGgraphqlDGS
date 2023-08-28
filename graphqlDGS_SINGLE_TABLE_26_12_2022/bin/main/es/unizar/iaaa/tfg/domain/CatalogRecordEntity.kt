package es.unizar.iaaa.tfg.domain

import javax.persistence.*

@Entity
@Table(name = "catalogrecord")
class CatalogRecordEntity {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String

    @ManyToMany(mappedBy = "records")
    lateinit var catalogs: Collection<CatalogEntity>

    @ManyToOne
    lateinit var resource: ResourceEntity
}
