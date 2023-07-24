package es.unizar.iaaa.tfg.domain.resourceRelations

import es.unizar.iaaa.tfg.domain.resources.DatasetEntity
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.Table

/*
 * Entity of Location. many DatasetEntity can have many locations.
 * The format of one location is similar to this: Pais/Autonomia/Provincia.
 */
@Entity
@Table(name = "location")
class LocationEntity {
    @Id
    @Column(length = 9000)
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
