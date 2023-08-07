package es.unizar.iaaa.tfg.domain.distribution

import com.graphqlDGS.graphqlDGS.model.types.Distribution
import es.unizar.iaaa.tfg.domain.resourceRelations.IdentifierEntity
import es.unizar.iaaa.tfg.domain.resources.DataServiceEntity
import es.unizar.iaaa.tfg.domain.resources.DatasetEntity

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.OneToMany
import jakarta.persistence.Table
import jakarta.validation.constraints.Min

/*
 * Entity of Distribution type.
 */
@Entity
@Table(name = "distribution")
class DistributionEntity {
    @Id
    lateinit var id: String

    //La anotación @Index no se puede aplicar directamente a los atributos de una clase en Kotlin.
    // La anotación @Index en Hibernate/JPA se aplica a nivel de columna en la base de datos y no a nivel de atributo
    @Column(nullable = true, length = 900,columnDefinition = "varchar(900) INDEX")
    var accessUrl: String?=null

    @Column(nullable = true,columnDefinition = "varchar(255) INDEX")
    @Min(0)
    var byteSize: UInt = 0u

    @Column(nullable = true,columnDefinition = "varchar(255) INDEX")
    var format: String? = null

    /*@Column(nullable = true)
    lateinit var identifier: String*/

    //@OneToOne(mappedBy = "distributionTitle")
    //lateinit var title: Collection<TitlesEntity>

    @OneToMany(mappedBy = "distribution")
    lateinit var identifiers: Collection<IdentifierEntity>

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "acessservice",
        joinColumns = [JoinColumn(name = "distribution_id")],
        inverseJoinColumns = [JoinColumn(name = "data_service_id")],
    )
    lateinit var accessService: Collection<DataServiceEntity>

   /* @ManyToMany(mappedBy="inseries")
    lateinit var distributions:Collection<DatasetEntity>*/
    @ManyToMany(mappedBy = "distributionsDataset")
    lateinit var datasets: Collection<DatasetEntity>


    fun toDistribution() = Distribution(id)
}
