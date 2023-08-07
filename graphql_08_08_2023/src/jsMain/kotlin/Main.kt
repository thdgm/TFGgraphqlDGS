
import com.apollographql.apollo3.ApolloClient
import com.apollographql.apollo3.api.http.HttpHeader
import com.apollographql.apollo3.api.http.HttpMethod
import com.schema.CatalogQuery
import components.commmon.Application
import kotlinx.browser.document
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

import react.create
import react.dom.client.createRoot


import react.router.dom.BrowserRouter



import redux.RAction
import redux.Reducer
import redux.applyMiddleware
//import redux.createStore


//var okHttpClient = OkHttpClient.Builder().build()
val apolloClient = ApolloClient.Builder()
    .serverUrl("http://localhost:8081/graphql")
    //.okHttpClient(okHttpClient)
    .httpMethod(HttpMethod.Post)
    .httpHeaders(
        listOf(
            HttpHeader("Access-Control-Allow-Origin","*"),
            HttpHeader("Access-Control-Allow-Methods", "POST, GET"),
            HttpHeader("Content-Type", "application/json;"),
        )
    )
    .build()





fun main() {


    GlobalScope.launch {
        //val response = apolloClient.query(QueryTestQuery(id = "root")).execute()
        //console.log("RESPONSES: ${response.data?.catalog?.id}")
    }


    //require("jvm-js-fullstack-master/src/commonMain/resources/styles.css")
    val container = document.getElementById("root") ?: error("Couldn't find root container!")

    createRoot(container).render (

        Application.create { name = "Localiza tu Dataset" }


    )

}
