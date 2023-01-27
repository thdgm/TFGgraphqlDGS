package es.unizar.iaaa.tfg.annotations

import com.netflix.graphql.types.subscription.websockets.Message
import jakarta.validation.Constraint
import jakarta.validation.ConstraintValidator
import jakarta.validation.ConstraintValidatorContext
import kotlin.reflect.KClass

@Target(AnnotationTarget.FIELD)
@MustBeDocumented
@Constraint(validatedBy = [DatasetInCatalogValidation::class])
annotation class DatasetInCatalogType(
    val message: String = "Debe ser del tipo DatasetInCatalog",
    val groups: Array<KClass<*>> = [],
    val payload: Array<KClass<out Message.SubscribeMessage.Payload>> = []
)

class DatasetInCatalogValidation : ConstraintValidator<DatasetInCatalogType, String> {
    override fun isValid(value: String?, context: ConstraintValidatorContext?): Boolean {
        if (value != "data_service") return true
        return false
    }
}