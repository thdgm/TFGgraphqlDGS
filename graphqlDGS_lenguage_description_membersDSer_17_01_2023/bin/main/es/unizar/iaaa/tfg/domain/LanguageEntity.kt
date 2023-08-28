package es.unizar.iaaa.tfg.domain

import javax.persistence.*

@Entity
@Table(name = "language")
class LanguageEntity {
    @Id
    lateinit var id: String

    @ManyToMany
    @JoinTable(
        name = "languages_resources",
        joinColumns = [JoinColumn(name = "id_language")],
        inverseJoinColumns = [JoinColumn(name = "id_resource")],
    )
    lateinit var resourcesLanguages: MutableCollection<ResourceEntity>

    @OneToMany(mappedBy = "language")
    lateinit var descriptions: Collection<DescriptionEntity>
}
