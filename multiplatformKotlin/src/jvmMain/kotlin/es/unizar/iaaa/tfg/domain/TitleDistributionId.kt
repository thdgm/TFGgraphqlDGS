package es.unizar.iaaa.tfg.domain

import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import java.io.Serializable

@Embeddable
class TitleDistributionId: Serializable {
    @Column(name="id_title",nullable=false,length = 2000)
    lateinit var titleId:String
    @Column(name="id_distribution",nullable=false)
    lateinit var distributionId:String
}