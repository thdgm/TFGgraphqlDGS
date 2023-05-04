package es.unizar.iaaa.tfg.domain.resourceRelations

import es.unizar.iaaa.tfg.domain.ids.KeywordDatasetId
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import jakarta.persistence.EmbeddedId
import jakarta.persistence.Entity
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.MapsId
import jakarta.persistence.Table

/*
 * Entity of Keyword. One DatasetEntity can have many keywords.
 * Furthermore, keywords have languages. (LangString type)
 */
@Entity
@Table(name = "keyword")
class KeywordEntity {
    @EmbeddedId
    lateinit var id: KeywordDatasetId

    @ManyToOne
    @JoinColumn(name = "id_dataset",referencedColumnName="id")
    @MapsId(value="id_dataset")
    lateinit var dataset: DatasetEntity

    @ManyToOne
    @JoinColumn(name = "languageId", nullable = true)
    lateinit var language: LanguageEntity

}
