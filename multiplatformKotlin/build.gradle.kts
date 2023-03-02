import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("multiplatform") version "1.8.10"
    kotlin("plugin.serialization") version "1.8.10"

    id("org.springframework.boot") version "3.0.1" apply false
    id("io.spring.dependency-management") version "1.1.0"  //apply false
    id("com.netflix.dgs.codegen") version "5.6.7" apply false
    id("io.freefair.lombok") version "5.3.0" //apply false
    id("io.gitlab.arturbosch.detekt").version("1.22.0")

    kotlin("plugin.jpa") version "1.8.0" //apply false
    kotlin("plugin.lombok") version "1.8.10" //apply false
    kotlin("plugin.spring") version "1.8.0"  //apply false
    application
}

group = "com.example"
version = "0.0.1-SNAPSHOT"

repositories {
    mavenCentral()
    maven { url = uri("https://maven.pkg.jetbrains.space/kotlin/p/kotlin/kotlin-js-wrappers") }

}


kotlin {
    jvm("graphql") {
        compilations.all {
            kotlinOptions.jvmTarget = "17"
        }
        withJava()
        testRuns["test"].executionTask.configure {
            useJUnitPlatform()
        }
        /*apply(plugin = "org.springframework.boot")
       // apply(plugin = "io.spring.dependency-management")
        apply(plugin = "org.jetbrains.kotlin.plugin.spring")
        apply(plugin = "org.jetbrains.kotlin.plugin.serialization")
        apply(plugin = "org.jetbrains.kotlin.plugin.lombok")
        apply(plugin = "org.jetbrains.kotlin.plugin.jpa")
        apply(plugin = "com.netflix.dgs.codegen")
        apply(plugin = "io.freefair.lombok")
        apply(plugin = "io.gitlab.arturbosch.detekt")*/

        apply(plugin = "org.springframework.boot")
        apply(plugin = "com.netflix.dgs.codegen")


        tasks.withType<com.netflix.graphql.dgs.codegen.gradle.GenerateJavaTask> {
            // The package name to use to generate sources


            schemaPaths = mutableListOf("src/graphqlMain/resources/schema")
            packageName = "com.graphqlDGS.graphqlDGS.model"
            language = "kotlin"
            typeMapping=mutableMapOf("LangString" to "es.unizar.iaaa.tfg.annotations.LangString",
                "Periocidad" to "es.unizar.iaaa.tfg.annotations.Periocidad",
                "Concept" to "es.unizar.iaaa.tfg.annotations.Concept",
                "NonNegativeInt" to "es.unizar.iaaa.tfg.annotations.NonNegativeInt",
                "MediaType" to "es.unizar.iaaa.tfg.annotations.MediaType",
            )
        }

        tasks.withType<KotlinCompile> {
            kotlinOptions {
                freeCompilerArgs = listOf("-Xjsr305=strict")
                jvmTarget = "17"
            }
        }

        tasks.withType<Test> {
            useJUnitPlatform()
        }


    }

    js("react",IR) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport{
                    enabled.set(true)
                    outputFileName = "main.js"
                    outputPath = File(buildDir, "processedResources/spring/main/static")
                }

            }
        }
    }
    sourceSets {
        val graphqlMain by getting{
            dependencies{
              implementation(platform("com.netflix.graphql.dgs:graphql-dgs-platform-dependencies:latest.release"))
              implementation("com.netflix.graphql.dgs:graphql-dgs-spring-boot-starter")

              // Same version as codegen plugin
              implementation("com.netflix.graphql.dgs.codegen:graphql-dgs-codegen-core:5.6.7")

              implementation("org.springframework.boot:spring-boot-starter-data-jpa")
              implementation("org.springframework.boot:spring-boot-starter-graphql")
              implementation("org.springframework.boot:spring-boot-starter-data-redis")
              implementation("org.springframework.boot:spring-boot-starter-data-redis-reactive")
              implementation("org.springframework.boot:spring-boot-starter-web")
              implementation("org.springframework.boot:spring-boot-starter-validation:3.0.2")

              implementation("com.fasterxml.jackson.module:jackson-module-kotlin")

              implementation("org.jetbrains.kotlin:kotlin-reflect")
              implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

              implementation("org.json:json:20090211")
              implementation ("com.google.code.gson:gson:2.8.5")

              implementation("redis.clients:jedis:4.4.0-m2")

              implementation ("io.github.microutils:kotlin-logging-jvm:2.0.11")

              implementation ("commons-validator:commons-validator:1.7")

              compileOnly("org.projectlombok:lombok")

              runtimeOnly("com.h2database:h2")


            }
        }
        val graphqlTest by getting{
            dependencies{
                implementation("org.springframework.boot:spring-boot-starter-test")
                implementation("org.springframework:spring-webflux")
                implementation("org.springframework.graphql:spring-graphql-test")
            }
        }

        val reactMain by getting{
            dependencies{
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react:18.2.0-pre.385")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom:18.2.0-pre.385")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-emotion:11.10.4-pre.385")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-router-dom:6.3.0-pre.385")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-redux:4.1.2-pre.385")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-redux:7.2.6-pre.385")

                implementation(npm("todomvc-app-css", "2.0.0"))
                implementation(npm("todomvc-common", "1.0.0"))
            }
        }
    }
}

detekt {
    toolVersion = "1.22.0"
    autoCorrect = true
}

dependencyManagement {
    imports {
        mavenBom ("com.netflix.graphql.dgs:graphql-dgs-platform-dependencies:latest.release")
    }
}





