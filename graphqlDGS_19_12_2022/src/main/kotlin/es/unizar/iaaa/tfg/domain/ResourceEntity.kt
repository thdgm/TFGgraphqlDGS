package es.unizar.iaaa.tfg.domain

import javax.persistence.*

@Entity
@Inheritance(strategy=InheritanceType.JOINED)
@DiscriminatorValue("null")
@Table(name = "resource")
open class ResourceEntity {
    @Id
    open lateinit var id: String

    @Column(nullable = false)
    open lateinit var title: String

    @Column(nullable = false)
    open lateinit var tipo: String

    @OneToMany(mappedBy = "id_target")
    open lateinit var relationshipsTarget: Collection<RelationshipsEntity>

    @OneToMany(mappedBy = "resource")
    open lateinit var catalogRecords: Collection<CatalogRecordEntity>

    @ManyToOne
    @JoinColumn(name="datasetServiceId", nullable=true)
    open lateinit var datasetService:DataServiceEntity
}