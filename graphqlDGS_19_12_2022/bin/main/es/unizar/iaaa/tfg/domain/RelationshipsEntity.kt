package es.unizar.iaaa.tfg.domain

import java.io.Serializable
import javax.persistence.Column
import javax.persistence.EmbeddedId
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.MapsId
import javax.persistence.Table

@Entity
@Table(name = "relationships")

class RelationshipsEntity: Serializable{

    @EmbeddedId
    lateinit var id: RelationshipsIds

    @ManyToOne
    @JoinColumn(name="idSource")
    @MapsId("idSource")
    lateinit var id_source:CatalogEntity

    @ManyToOne
    @JoinColumn(name="idTarget")
    @MapsId("idTarget")
    lateinit var id_target:ResourceEntity

    @Column(name="target_type")
    lateinit var types: String




}

