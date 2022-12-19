package es.unizar.iaaa.tfg.domain

import javax.persistence.*

@Entity
@Inheritance(strategy=InheritanceType.JOINED)
@DiscriminatorValue("null")
@Table(name = "resource")
open class ResourceEntity {
    @Id
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String

    @Column(nullable = false)
    lateinit var tipo: String

    @OneToMany(mappedBy = "id_target")
    lateinit var relationshipsTarget: Collection<RelationshipsEntity>

    @OneToMany(mappedBy = "resourceId")
    lateinit var records: Collection<CatalogInRecordEntity>

    @OneToMany(mappedBy = "resource")
    lateinit var catalogRecords: Collection<CatalogRecordEntity>

    @ManyToOne
    @JoinColumn(name="datasetServiceId", nullable=true)
    lateinit var datasetService:DataServiceEntity
}