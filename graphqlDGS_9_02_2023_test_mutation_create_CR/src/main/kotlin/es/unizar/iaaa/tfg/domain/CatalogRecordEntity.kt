package es.unizar.iaaa.tfg.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table
import lombok.Data

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
