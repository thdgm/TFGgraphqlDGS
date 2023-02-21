package es.unizar.iaaa.tfg.domain

import jakarta.persistence.Column
import jakarta.persistence.DiscriminatorColumn
import jakarta.persistence.DiscriminatorType
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
import jakarta.persistence.Table
import java.time.LocalDateTime

@Entity
@DiscriminatorColumn(name = "tipo", discriminatorType = DiscriminatorType.STRING)
// @Inheritance(strategy = InheritanceType.SINGLE_TABLE)
// @DiscriminatorValue("null")
@Table(name = "resource")
open class ResourceEntity {
    @Id
    open lateinit var id: String

   /* @Column(nullable = false)
    open lateinit var title: Collection<LangStringEntity>*/
    @OneToMany(mappedBy = "resourceTitle")
    open lateinit var title: Collection<TitlesEntity>

    @Column(name = "tipo", nullable = false, insertable = false, updatable = false)
    open lateinit var type: String

    @Column(nullable = true)
    open lateinit var fechaHoraCreacion: LocalDateTime

    @Column(nullable = true)
    open lateinit var ultimaModificacion: LocalDateTime

    @Column(nullable = true)
    open lateinit var identifier: String

    @Column(nullable = true)
    open lateinit var license: String

    @OneToMany(mappedBy = "resource")
    open lateinit var catalogRecords: Collection<CatalogRecordEntity>

    @OneToMany(mappedBy = "resource")
    open lateinit var descriptions: Collection<ResourceDescriptionsEntity>

    @ManyToMany(mappedBy = "resources")
    open lateinit var theme: MutableCollection<ThemeEntity>

    @ManyToMany(mappedBy = "servesDataset")
    open lateinit var datasetService: MutableCollection<DataServiceEntity>

    @ManyToMany
    @JoinTable(
        name = "relationships",
        joinColumns = [JoinColumn(name = "id_resource")],
        inverseJoinColumns = [JoinColumn(name = "id_catalog")],
    )
    open lateinit var catalogResources: MutableCollection<CatalogEntity>

    /*@OneToMany(mappedBy = "resource")
    open lateinit var theme: MutableCollection<ThemeEntity>*/

    @ManyToMany(mappedBy = "resourcesLanguages")
    open lateinit var languagesResources: MutableCollection<LanguageEntity>

    @ManyToOne
    @JoinColumn(name = "publisherId", nullable = true)
    open lateinit var publisher: PublisherEntity

}
