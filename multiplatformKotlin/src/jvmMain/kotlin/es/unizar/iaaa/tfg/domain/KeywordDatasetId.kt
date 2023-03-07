package es.unizar.iaaa.tfg.domain

import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import java.io.Serializable

@Embeddable
class KeywordDatasetId: Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }
    @Column(name="id_word",nullable=false)
    lateinit var wordId:String
    @Column(name="id_dataset",nullable=false)
    lateinit var datasetId:String
}
