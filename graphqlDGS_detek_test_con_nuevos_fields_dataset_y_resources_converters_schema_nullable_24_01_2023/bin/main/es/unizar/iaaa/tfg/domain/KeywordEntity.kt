package es.unizar.iaaa.tfg.domain

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.JoinTable
import javax.persistence.ManyToMany
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(name = "keyword")
class KeywordEntity {
    @Id
    lateinit var word: String

    @ManyToMany
    @JoinTable(
        name = "dataset_keyword",
        joinColumns = [JoinColumn(name = "keyword_id")],
        inverseJoinColumns = [JoinColumn(name = "dataset_id")],
    )
    lateinit var datasets: Collection<DatasetEntity>

    @ManyToOne
    @JoinColumn(name = "languageId", nullable = true)
    lateinit var language: LanguageEntity
}
