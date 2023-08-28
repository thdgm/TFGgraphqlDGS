package es.unizar.iaaa.tfg.domain

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(name = "description")
class DescriptionEntity {
    @Id
    lateinit var text: String

    @ManyToOne
    @JoinColumn(name = "languageId", nullable = true)
    lateinit var language: LanguageEntity

    @ManyToOne
    @JoinColumn(name = "resourceId", nullable = true)
    lateinit var resource: ResourceEntity
}
