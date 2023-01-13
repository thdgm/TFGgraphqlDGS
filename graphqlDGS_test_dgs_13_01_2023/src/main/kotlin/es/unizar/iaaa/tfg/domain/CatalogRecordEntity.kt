package es.unizar.iaaa.tfg.domain

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.ManyToMany
import javax.persistence.ManyToOne
import javax.persistence.Table

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
