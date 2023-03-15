package es.unizar.iaaa.tfg.domain.ids

import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import java.io.Serializable

@Embeddable
class ResourceDescriptionId: Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }
    @Column(name="id_description",nullable=false,length = 2000)
    lateinit var descriptionId:String
    @Column(name="id_resource",nullable=false)
    lateinit var resourceId:String
}
