package es.unizar.iaaa.tfg.annotations

import es.unizar.iaaa.tfg.constants.ConstantValues.LANGSTRING_SEPARADOR

data class LangString(val literal: String, val tag: String) {

    override fun toString(): String {
        return literal + LANGSTRING_SEPARADOR + tag
    }
}