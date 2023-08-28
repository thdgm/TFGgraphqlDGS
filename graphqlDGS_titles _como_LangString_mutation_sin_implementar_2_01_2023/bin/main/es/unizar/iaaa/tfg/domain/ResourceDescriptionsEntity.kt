package es.unizar.iaaa.tfg.domain

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table

@Entity
@Table(name = "description")
class ResourceDescriptionsEntity {
    @Id
    lateinit var text: String

    @ManyToOne
    @JoinColumn(name = "languageId", nullable = true)
    lateinit var language: LanguageEntity

    @ManyToOne
    @JoinColumn(name = "resourceId", referencedColumnName = "id",nullable = true)
    lateinit var resource: ResourceEntity


}
