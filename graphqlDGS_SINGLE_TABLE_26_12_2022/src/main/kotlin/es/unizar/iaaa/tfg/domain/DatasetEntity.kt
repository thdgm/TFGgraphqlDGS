package es.unizar.iaaa.tfg.domain

import com.graphqlDGS.graphqlDGS.model.types.Dataset
import java.io.Serializable
import javax.persistence.DiscriminatorValue
import javax.persistence.Entity
import javax.persistence.JoinColumn
import javax.persistence.JoinTable
import javax.persistence.ManyToMany
import javax.persistence.PrimaryKeyJoinColumn
import javax.persistence.Table

@Entity
@Table(name = "dataset")
@DiscriminatorValue("dataset")
//@PrimaryKeyJoinColumn(name = "dataset_id")
class DatasetEntity : ResourceEntity(), Serializable {

    companion object {
        private const val serialVersionUID: Long = 123
    }

    @ManyToMany
    @JoinTable(
        name = "inseries",
        joinColumns = [JoinColumn(name = "dataset_id")],
        inverseJoinColumns = [JoinColumn(name = "data_series_id")],
    )
    lateinit var inseries: Collection<DatasetSeriesEntity>

    @ManyToMany
    @JoinTable(
        name = "distributions",
        joinColumns = [JoinColumn(name = "dataset_id")],
        inverseJoinColumns = [JoinColumn(name = "distribution_id")],
    )
    lateinit var distributions: Collection<DistributionEntity>

    fun toDataset()= Dataset(id, title)

}
