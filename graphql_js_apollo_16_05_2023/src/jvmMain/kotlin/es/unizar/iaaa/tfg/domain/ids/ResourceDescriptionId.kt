package es.unizar.iaaa.tfg.domain.ids

import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import java.io.Serializable

/*
 *  ResourceDescription is a multivalued attribute of ResourceEntity
 *  Its Key is composed by the value of resourceDescription (string) and the primary key of ResourceEntity.
 */
@Embeddable
class ResourceDescriptionId: Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }
    @Column(name="id_description",nullable=false,length = 20000)
    lateinit var descriptionId:String
    @Column(name="id_resource",nullable=false)
    lateinit var resourceId:String
}
