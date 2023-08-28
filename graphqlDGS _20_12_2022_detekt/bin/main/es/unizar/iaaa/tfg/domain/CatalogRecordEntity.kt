package es.unizar.iaaa.tfg.domain

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.ManyToOne
import javax.persistence.OneToMany
import javax.persistence.Table
@Entity
@Table(name = "catalogrecord")
class CatalogRecordEntity {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String

    @OneToMany(mappedBy = "catalogRecordId")
    lateinit var resources: Collection<CatalogInRecordEntity>

    @ManyToOne
    lateinit var resource: ResourceEntity
}
