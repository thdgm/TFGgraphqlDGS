package es.unizar.iaaa.tfg.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
import jakarta.persistence.Table

@Entity
@Table(name = "publisher")
class PublisherEntity {
    @Id
    lateinit var id: String

    @Column(nullable = true)
    lateinit var notation: String

    @Column(nullable = true)
    lateinit var label: String

    @OneToMany(mappedBy = "publisher")
    lateinit var resources: MutableCollection<ResourceEntity>



    /*@ManyToMany
    @JoinTable(
      name = "themesResources",
      joinColumns = [JoinColumn(name = "id_theme")],
      inverseJoinColumns = [JoinColumn(name = "id_resource")],
    )
    lateinit var resources: MutableCollection<ResourceEntity>*/


}
