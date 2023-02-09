package es.unizar.iaaa.tfg.annotations

data class Periocidad(val rango:String?, val periodo:Float?){

    override fun toString(): String {
        if(rango != null && periodo != null){
            return "time:$rango $periodo"
        }
        return ""
    }


}