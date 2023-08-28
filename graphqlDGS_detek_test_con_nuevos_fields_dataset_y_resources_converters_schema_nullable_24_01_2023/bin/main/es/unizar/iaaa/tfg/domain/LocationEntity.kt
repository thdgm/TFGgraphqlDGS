package es.unizar.iaaa.tfg.domain

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.JoinTable
import javax.persistence.ManyToMany
import javax.persistence.Table

@Entity
@Table(name = "location")
class LocationEntity {
    @Id
    lateinit var nombre: String // Pais/Autonomia/Provincia...

    @Column(nullable = true)
    lateinit var tipo: String // Pais|Comunidad Autonoma|Provincia

    @ManyToMany
    @JoinTable(
        name = "dataset_location",
        joinColumns = [JoinColumn(name = "location_id")],
        inverseJoinColumns = [JoinColumn(name = "dataset_id")],
    )
    lateinit var datasets: Collection<DatasetEntity>
}
