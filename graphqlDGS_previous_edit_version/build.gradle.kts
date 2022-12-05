import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.7.5"
	id("io.spring.dependency-management") version "1.0.15.RELEASE"
	id("com.netflix.dgs.codegen") version "5.6.2"
	kotlin("jvm") version "1.7.21"
	kotlin("plugin.spring") version "1.7.21"
	kotlin("plugin.jpa") version "1.7.21"

    id("io.gitlab.arturbosch.detekt").version("1.22.0")
}

group = "com.graphqlDGS"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17
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
	implementation("com.netflix.graphql.dgs.codegen:graphql-dgs-codegen-core:5.6.2")
	implementation("org.springframework.boot:spring-boot-starter-graphql")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	runtimeOnly("com.h2database:h2")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	compileOnly("org.projectlombok:lombok")
	annotationProcessor("org.projectlombok:lombok")
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

  packageName = "com.graphqlDGS.graphqlDGS.model" // The package name to use to generate sources
	
	

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
