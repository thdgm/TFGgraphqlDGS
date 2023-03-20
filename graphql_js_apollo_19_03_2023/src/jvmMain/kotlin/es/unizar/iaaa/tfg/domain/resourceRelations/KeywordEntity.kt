package es.unizar.iaaa.tfg.domain.resourceRelations

import es.unizar.iaaa.tfg.domain.ids.KeywordDatasetId
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import jakarta.persistence.EmbeddedId
import jakarta.persistence.Entity
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.MapsId
import jakarta.persistence.Table

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

    /*@Id
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
    lateinit var language: LanguageEntity*/
}
