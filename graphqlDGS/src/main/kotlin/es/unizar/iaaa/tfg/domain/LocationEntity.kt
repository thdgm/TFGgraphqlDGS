package es.unizar.iaaa.tfg.domain

import javax.persistence.*

@Entity
@Table(name = "location")
class LocationEntity {
    @Id
    lateinit var Nombre: String // Pais/Autonomia/Provincia...

    @Column(nullable = true)
    lateinit var Tipo: String // Pais|Comunidad Autonoma|Provincia

    @ManyToMany
    @JoinTable(
        name = "dataset_location",
        joinColumns = [JoinColumn(name = "location_id")],
        inverseJoinColumns = [JoinColumn(name = "dataset_id")],
    )
    lateinit var datasets: Collection<DatasetEntity>
}
