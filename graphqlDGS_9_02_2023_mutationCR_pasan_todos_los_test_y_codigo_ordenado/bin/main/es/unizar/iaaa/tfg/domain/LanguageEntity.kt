package es.unizar.iaaa.tfg.domain

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.OneToMany
import jakarta.persistence.Table

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
    lateinit var descriptions: Collection<ResourceDescriptionsEntity>

    @OneToMany(mappedBy = "language")
    lateinit var keywords: Collection<KeywordEntity>
}
