package es.unizar.iaaa.tfg.domain

import javax.persistence.Column
import javax.persistence.DiscriminatorColumn
import javax.persistence.DiscriminatorType
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.JoinTable
import javax.persistence.ManyToMany
import javax.persistence.ManyToOne
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@DiscriminatorColumn(name = "tipo", discriminatorType = DiscriminatorType.STRING)
// @Inheritance(strategy = InheritanceType.SINGLE_TABLE)
// @DiscriminatorValue("null")
@Table(name = "resource")
open class ResourceEntity {
    @Id
    open lateinit var id: String

    @Column(nullable = false)
    open lateinit var title: String

    @Column(name = "tipo", nullable = false, insertable = false, updatable = false)
    open lateinit var type: String

    @OneToMany(mappedBy = "resource")
    open lateinit var catalogRecords: Collection<CatalogRecordEntity>

    @ManyToOne
    @JoinColumn(name = "datasetServiceId", nullable = true)
    open lateinit var datasetService: DataServiceEntity

    @ManyToMany
    @JoinTable(
        name = "relationships",
        joinColumns = [JoinColumn(name = "id_resource")],
        inverseJoinColumns = [JoinColumn(name = "id_catalog")],
    )
    open lateinit var catalogResources: MutableCollection<CatalogEntity>
}
