package es.unizar.iaaa.tfg.domain.ids

import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import java.io.Serializable

/*
 *  TitleResource is a multivalued attribute of ResourceEntity
 *  Its Key is composed by the value of TitleResource (string) and the primary key of ResourceEntity.
 */
@Embeddable
class TitleResourceId: Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }
    @Column(name="id_title",nullable=false,length = 11000,columnDefinition = "varchar(11000) INDEX")
    lateinit var titleId:String
    @Column(name="id_resource",nullable=false)
    lateinit var resourceId:String
}
