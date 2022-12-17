package es.unizar.iaaa.tfg.domain

import java.io.Serializable
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "cataloginrecord")
class CatalogInRecordEntity: Serializable {
    @Id
    lateinit var idCatalog: String
    @Id
    lateinit var idCatalogRecord: String
}