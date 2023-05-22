import org.jetbrains.kotlin.gradle.plugin.extraProperties
import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpack
import javax.swing.UIManager.put

val kotlinVersion = "1.8.10"
val serializationVersion = "1.4.1"
val ktorVersion = "2.2.4"
//val logbackVersion = "1.2.11"
val kotlinWrappersVersion = "1.0.0-pre.354"
//val kmongoVersion = "4.5.0"

fun kotlinw(target: String): String =
    "org.jetbrains.kotlin-wrappers:kotlin-$target"




plugins {
    kotlin("multiplatform") version "1.8.10"
    application //to run JVM part
    kotlin("plugin.serialization") version "1.8.10"

    id("org.springframework.boot") version "3.0.1" apply false
    id("io.spring.dependency-management") version "1.1.0"  //apply false
    id("com.netflix.dgs.codegen") version "5.6.7" apply false
    id("io.freefair.lombok") version "5.3.0" //apply false
    id("io.gitlab.arturbosch.detekt").version("1.22.0")
    id("org.jetbrains.kotlinx.kover") version "0.7.0-Alpha"
    id("com.apollographql.apollo3").version("3.7.4")

    kotlin("plugin.jpa") version "1.8.0" //apply false
    kotlin("plugin.lombok") version "1.8.10" //apply false
    kotlin("plugin.spring") version "1.8.0"  //apply false
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

kotlin {
    jvm {
        withJava()

        apply(plugin = "org.springframework.boot")
        apply(plugin = "com.netflix.dgs.codegen")


        tasks.withType<com.netflix.graphql.dgs.codegen.gradle.GenerateJavaTask> {
            // The package name to use to generate sources


            schemaPaths = mutableListOf("src/jvmMain/resources/schema/schema.graphqls")
            packageName = "com.graphqlDGS.graphqlDGS.model"
            language = "kotlin"
            typeMapping=mutableMapOf("LangString" to "es.unizar.iaaa.tfg.annotations.LangString",
                "Frequency" to "es.unizar.iaaa.tfg.annotations.Frequency",
                "Concept" to "es.unizar.iaaa.tfg.annotations.Concept",
                "NonNegativeInt" to "es.unizar.iaaa.tfg.annotations.NonNegativeInt",
                "MediaType" to "es.unizar.iaaa.tfg.annotations.MediaType",
            )
        }

        tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
            kotlinOptions {
                freeCompilerArgs = listOf("-Xjsr305=strict")
                jvmTarget = "17"
            }
        }

        tasks.withType<Test> {
            useJUnitPlatform()
        }
    }

    js(IR) {

        browser {
            binaries.executable()
            webpackTask {
                outputFileName = "index.html"
            }

        }

    }
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$serializationVersion")
                implementation("io.ktor:ktor-client-core:$ktorVersion")
                //implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.0-Beta")
                implementation("com.apollographql.apollo3:apollo-runtime:3.7.4")

                //implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.4.0")
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.4")

            }
        }

        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))

            }
        }

        val jvmMain by getting {
            dependencies {
                /*implementation("io.ktor:ktor-serialization:$ktorVersion")
                implementation("io.ktor:ktor-server-content-negotiation:$ktorVersion")
                implementation("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                implementation("io.ktor:ktor-server-cors:$ktorVersion")
                implementation("io.ktor:ktor-server-compression:$ktorVersion")
                implementation("io.ktor:ktor-server-core-jvm:$ktorVersion")
                implementation("io.ktor:ktor-server-netty:$ktorVersion")*/
                //implementation("ch.qos.logback:logback-classic:$logbackVersion")
                //implementation("org.litote.kmongo:kmongo-coroutine-serialization:$kmongoVersion")

                implementation(platform("com.netflix.graphql.dgs:graphql-dgs-platform-dependencies:latest.release"))
                implementation("com.netflix.graphql.dgs:graphql-dgs-spring-boot-starter")

                // Same version as codegen plugin
                implementation("com.netflix.graphql.dgs.codegen:graphql-dgs-codegen-core:5.6.7")
                implementation("org.springframework.boot:spring-boot-starter-web")
                implementation("org.springframework.boot:spring-boot-starter-data-jpa")
                implementation("org.springframework.boot:spring-boot-starter-graphql")
                implementation("org.springframework.boot:spring-boot-starter-data-redis")
                implementation("org.springframework.boot:spring-boot-starter-data-redis-reactive")
                implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
                implementation("org.springframework.boot:spring-boot-starter-validation:3.0.2")

                implementation("com.fasterxml.jackson.module:jackson-module-kotlin")

                implementation("org.jetbrains.kotlin:kotlin-reflect")


                implementation("org.json:json:20090211")
                implementation ("com.google.code.gson:gson:2.8.5")

                implementation("redis.clients:jedis:4.4.0-m2")

                implementation ("io.github.microutils:kotlin-logging-jvm:2.0.11")

                implementation ("commons-validator:commons-validator:1.7")

                compileOnly("org.projectlombok:lombok")

                runtimeOnly("com.h2database:h2")

                implementation("com.github.doyaaaaaken:kotlin-csv-jvm:1.9.0")
                implementation ("org.postgresql:postgresql:42.3.1")
                implementation ("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.4")
                implementation ("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.6.4")


                implementation("com.opencsv:opencsv:4.6")
            }
        }

        val jvmTest by getting{
            dependencies{
                implementation("org.springframework.boot:spring-boot-starter-test")
                implementation("org.springframework:spring-webflux")
                implementation("org.springframework.graphql:spring-graphql-test")
            }
        }

        val jsMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-js:$ktorVersion")
                implementation("io.ktor:ktor-client-content-negotiation:$ktorVersion")
                implementation("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                implementation(project.dependencies.enforcedPlatform("org.jetbrains.kotlin-wrappers:kotlin-wrappers-bom:$kotlinWrappersVersion"))
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-router-dom")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-redux")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-redux")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-emotion")

                //implementation("org.jetbrains.kotlin-wrappers:kotlin-mui")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-mui")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-mui-icons")
                implementation("org.jetbrains.kotlinx:kotlinx-html-js:0.7.3")


            }
        }
    }
}

application {
    mainClass.set("es/unizar/iaaa/tfg/GraphqlDgsApplicationKt")
}

detekt {
    toolVersion = "1.22.0"
    autoCorrect = true
    config = files("$projectDir/detekt-config.yml")
    autoCorrect = true
}


dependencyManagement {
    imports {
        mavenBom ("com.netflix.graphql.dgs:graphql-dgs-platform-dependencies:latest.release")
    }
}


tasks.getByName<Copy>("jvmProcessResources") {
    dependsOn(tasks.getByName("jsBrowserWebpack"))
}


tasks.getByName<JavaExec>("run") {
    classpath(tasks.getByName<Jar>("jvmJar")) // so that the JS artifacts generated by `jvmJar` can be found and served
}

apollo {
    service("service") {
        packageName.set("com.schema")
        schemaFile.set(
            file("src/commonMain/graphql/com/schema/schema.graphqls")
        )
        generateKotlinModels.set(true)
        outputDirConnection {
            connectToKotlinSourceSet("jsMain")
        }

        mapScalar( "LangString", "commonModels.LangStringAdapterScalar", "commonModels.langStringAdapter")
        mapScalar( "Concept", "commonModels.ConceptAdapterScalar", "commonModels.conceptAdapter")
        mapScalar("MediaType","commonModels.MediaTypeAdapterScalar", "commonModels.mediaTypeAdapter")
        mapScalar("Frequency","commonModels.FrequencyAdapterScalar", "commonModels.frequencyAdapter")
    }
}

/*
tasks.withType<KotlinWebpack> {
    configure<org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpackConfig> {
        devServer?.let { devServer ->
            devServer.extraProperties.apply {
                put("historyApiFallback", true)
                // Otros ajustes del servidor de desarrollo...
            }
        }
    }
}*/
