package es.unizar.iaaa.tfg.domain

import javax.persistence.*

@Entity
@Inheritance(strategy=InheritanceType.JOINED)
@DiscriminatorColumn(name="tipo")
@Table(name = "resource")
open class ResourceEntity {
    @Id
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String

    @OneToMany(mappedBy = "id_source")
    lateinit var relationshipsSource: Collection<RelationshipsEntity>
    @OneToMany(mappedBy = "id_target")
    lateinit var relationshipsTarget: Collection<RelationshipsEntity>

}