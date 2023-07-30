package Store

import redux.Action
import redux.RAction
import redux.Reducer
import redux.applyMiddleware
import redux.createStore
import redux.rEnhancer

data class AppState(
    val isLoading: Boolean // Agrega cualquier otro estado que necesites
)

sealed class AppAction : RAction {
    data class SetLoading1(val isLoading: Boolean) : Action {
        override val type: String
            get() = TODO("Not yet implemented")
    }
    // Agrega otras acciones que necesites
}
class SetLoadingTrue : RAction
class SetLoadingFalse : RAction
val reducer: Reducer<AppState, Any> = { state, action ->
    when (action) {
        is SetLoadingTrue -> state.copy(isLoading = true)
        is SetLoadingFalse -> state.copy(isLoading = false)
        // Agrega otros casos para manejar otras acciones
        else -> state
    }
}
/*
abstract class SetLoadingAction

val reducer: (Boolean, Action) -> Boolean = { state, action ->
    when (action) {
        is SetLoadingAction -> !state

        else -> state
    }
}*/


//val initialState = false
//val store = createStore(reducer, initialState)
val initialState = AppState(isLoading = false)
val storee = createStore(reducer, initialState, rEnhancer())


