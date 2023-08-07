package es.unizar.iaaa.tfg.domain.resources

import es.unizar.iaaa.tfg.domain.resourceRelations.IdentifierEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.LanguageEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.PublisherEntity
import es.unizar.iaaa.tfg.domain.resourceRelations.ThemeEntity
import es.unizar.iaaa.tfg.domain.catalogRecord.CatalogRecordEntity
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

/*
 * Entity of ResourceEntity. Father of Catalog, DataService,DatasetSeries,Dataset.
 */
@Entity
@DiscriminatorColumn(name = "tipo", discriminatorType = DiscriminatorType.STRING)
@Table(name = "resource")
open class ResourceEntity {
    @Id
    open lateinit var id: String

    @Column(name = "tipo", nullable = false, insertable = false, updatable = false)
    open var type: String? = null

    @Column(nullable = true)
    open var issued: LocalDateTime? = null

    @Column(nullable = true)
    open var modified: LocalDateTime? = null

    @Column(nullable = true)
    open var license: String? = null

    @OneToMany(mappedBy = "resource")
    open lateinit var catalogRecords: Collection<CatalogRecordEntity>

    @OneToMany(mappedBy = "resource")
    open lateinit var identifiers: Collection<IdentifierEntity>

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

    @ManyToMany(mappedBy = "resourcesLanguages")
    open lateinit var languagesResources: MutableCollection<LanguageEntity>

    @ManyToOne
    @JoinColumn(name = "publisherId", referencedColumnName = "id", nullable = true)
    open var publisher: PublisherEntity? = null

}
