package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Dataset
import java.io.Serializable
import javax.persistence.*

@Entity
@Table(name = "dataset")
@PrimaryKeyJoinColumn(name = "dataset_id")
class DatasetEntity:ResourceEntity(), Serializable {
    /*@Id
    lateinit var id: String

    @Column(nullable = false)
    lateinit var title: String*/

    @ManyToMany
    @JoinTable(
        name= "inseries",
        joinColumns = arrayOf(JoinColumn(name="dataset_id")),
        inverseJoinColumns = arrayOf(JoinColumn(name="data_series_id")),
    )
    lateinit var inseries:Collection<DatasetSeriesEntity>

    @ManyToMany
    @JoinTable(
        name= "distributions",
        joinColumns = arrayOf(JoinColumn(name="dataset_id")),
        inverseJoinColumns = arrayOf(JoinColumn(name="distribution_id")),
    )
    lateinit var distributions:Collection<DistributionEntity>

    fun toDataset(): Dataset? {
        return Dataset(id, title)
    }
}
