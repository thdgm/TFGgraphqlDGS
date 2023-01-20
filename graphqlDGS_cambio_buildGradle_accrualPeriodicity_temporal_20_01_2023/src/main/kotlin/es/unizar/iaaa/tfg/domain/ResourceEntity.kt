package es.unizar.iaaa.tfg.domain

import java.util.Date
import javax.persistence.*

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

    @Column(nullable = true)
    open lateinit var fechaHoraCreacion: Date

    @Column(nullable = true)
    open lateinit var ultimaModificacion: Date

    @OneToMany(mappedBy = "resource")
    open lateinit var catalogRecords: Collection<CatalogRecordEntity>

    @OneToMany(mappedBy = "resource")
    open lateinit var descriptions: Collection<DescriptionEntity>

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

    @ManyToMany(mappedBy = "resourcesLanguages")
    open lateinit var languagesResources: MutableCollection<LanguageEntity>
}
