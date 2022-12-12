package es.unizar.iaaa.tfg.domain

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "distribution")
class DistributionEntity {
    @Id
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String
}