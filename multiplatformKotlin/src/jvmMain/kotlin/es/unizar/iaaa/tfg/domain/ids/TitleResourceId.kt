package es.unizar.iaaa.tfg.domain.ids

import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import java.io.Serializable

@Embeddable
class TitleResourceId: Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }
    @Column(name="id_title",nullable=false)
    lateinit var titleId:String
    @Column(name="id_resource",nullable=false)
    lateinit var resourceId:String
}
