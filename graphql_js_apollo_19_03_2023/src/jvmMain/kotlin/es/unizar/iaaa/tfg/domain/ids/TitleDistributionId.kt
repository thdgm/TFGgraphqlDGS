package es.unizar.iaaa.tfg.domain.ids

import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import java.io.Serializable

@Embeddable
class TitleDistributionId: Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }
    @Column(name="id_title",nullable=false,length = 2000)
    lateinit var titleId:String
    @Column(name="id_distribution",nullable=false)
    lateinit var distributionId:String
}
