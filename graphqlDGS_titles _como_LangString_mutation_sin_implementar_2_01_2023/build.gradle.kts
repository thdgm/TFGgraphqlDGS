import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "3.0.1"
	id("io.spring.dependency-management") version "1.1.0"
	id("com.netflix.dgs.codegen") version "5.6.7"

	kotlin("jvm") version "1.8.0"
	kotlin("plugin.spring") version "1.8.0"
	kotlin("plugin.jpa") version "1.8.0"

    id("io.gitlab.arturbosch.detekt").version("1.22.0")
}

group = "com.graphqlDGS"
version = "0.0.1-SNAPSHOT"

configurations {
	compileOnly {
		extendsFrom(configurations.annotationProcessor.get())
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation(platform("com.netflix.graphql.dgs:graphql-dgs-platform-dependencies:latest.release"))
	implementation("com.netflix.graphql.dgs:graphql-dgs-spring-boot-starter")

	// Same version as codegen plugin
	implementation("com.netflix.graphql.dgs.codegen:graphql-dgs-codegen-core:5.6.7")

	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-graphql")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.springframework.boot:spring-boot-starter-validation:3.0.2")

	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")

	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

	compileOnly("org.projectlombok:lombok")
	annotationProcessor("org.projectlombok:lombok")

	runtimeOnly("com.h2database:h2")

	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("org.springframework:spring-webflux")
	testImplementation("org.springframework.graphql:spring-graphql-test")

    detektPlugins("io.gitlab.arturbosch.detekt:detekt-formatting:1.22.0")
}

dependencyManagement {
    imports {
        mavenBom ("com.netflix.graphql.dgs:graphql-dgs-platform-dependencies:latest.release")
    }
}

tasks.withType<com.netflix.graphql.dgs.codegen.gradle.GenerateJavaTask> {
	// The package name to use to generate sources
	packageName = "com.graphqlDGS.graphqlDGS.model"
	typeMapping=mutableMapOf("LangString" to "es.unizar.iaaa.tfg.annotations.LangString")
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

detekt {
    toolVersion = "1.22.0"
    autoCorrect = true
}
