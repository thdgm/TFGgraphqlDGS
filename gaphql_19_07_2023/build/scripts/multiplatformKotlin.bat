@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem

@if "%DEBUG%"=="" @echo off
@rem ##########################################################################
@rem
@rem  multiplatformKotlin startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%"=="" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%..

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

@rem Add default JVM options here. You can also use JAVA_OPTS and MULTIPLATFORM_KOTLIN_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS=

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if %ERRORLEVEL% equ 0 goto execute

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto execute

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\lib\multiplatformKotlin-jvm-1.0-SNAPSHOT.jar;%APP_HOME%\lib\kotlin-logging-jvm-2.0.11.jar;%APP_HOME%\lib\kotlin-csv-jvm-1.9.0.jar;%APP_HOME%\lib\kotlinx-serialization-json-jvm-1.4.1.jar;%APP_HOME%\lib\ktor-client-core-jvm-2.2.4.jar;%APP_HOME%\lib\graphql-dgs-codegen-core-5.6.7.jar;%APP_HOME%\lib\graphql-dgs-codegen-shared-core-5.6.7.jar;%APP_HOME%\lib\kotlinx-coroutines-slf4j-1.6.4.jar;%APP_HOME%\lib\graphql-dgs-spring-boot-starter-7.3.3.jar;%APP_HOME%\lib\graphql-dgs-spring-boot-oss-autoconfigure-7.3.3.jar;%APP_HOME%\lib\graphql-dgs-spring-webmvc-autoconfigure-7.3.3.jar;%APP_HOME%\lib\graphql-dgs-client-7.3.3.jar;%APP_HOME%\lib\graphql-dgs-spring-webmvc-7.3.3.jar;%APP_HOME%\lib\graphql-error-types-7.3.3.jar;%APP_HOME%\lib\graphql-dgs-subscription-types-7.3.3.jar;%APP_HOME%\lib\graphql-dgs-mocking-7.3.3.jar;%APP_HOME%\lib\graphql-dgs-7.3.3.jar;%APP_HOME%\lib\ktor-events-jvm-2.2.4.jar;%APP_HOME%\lib\ktor-websocket-serialization-jvm-2.2.4.jar;%APP_HOME%\lib\ktor-serialization-jvm-2.2.4.jar;%APP_HOME%\lib\ktor-websockets-jvm-2.2.4.jar;%APP_HOME%\lib\ktor-http-jvm-2.2.4.jar;%APP_HOME%\lib\ktor-utils-jvm-2.2.4.jar;%APP_HOME%\lib\ktor-io-jvm-2.2.4.jar;%APP_HOME%\lib\kotlinx-coroutines-jdk8-1.6.4.jar;%APP_HOME%\lib\kotlinx-coroutines-reactor-1.6.4.jar;%APP_HOME%\lib\kotlinx-coroutines-reactive-1.6.4.jar;%APP_HOME%\lib\kotlinx-coroutines-android-1.6.4.jar;%APP_HOME%\lib\apollo-runtime-jvm-3.7.4.jar;%APP_HOME%\lib\kotlinx-coroutines-core-jvm-1.6.4.jar;%APP_HOME%\lib\spring-boot-starter-graphql-3.1.1.jar;%APP_HOME%\lib\spring-boot-starter-json-3.0.1.jar;%APP_HOME%\lib\jackson-datatype-jsr310-2.14.1.jar;%APP_HOME%\lib\jackson-module-parameter-names-2.14.1.jar;%APP_HOME%\lib\jackson-datatype-jdk8-2.14.1.jar;%APP_HOME%\lib\jackson-databind-2.14.1.jar;%APP_HOME%\lib\jackson-annotations-2.14.1.jar;%APP_HOME%\lib\jackson-core-2.14.1.jar;%APP_HOME%\lib\jackson-module-kotlin-2.14.1.jar;%APP_HOME%\lib\kotlinpoet-1.12.0.jar;%APP_HOME%\lib\kotlin-reflect-1.8.10.jar;%APP_HOME%\lib\kotlin-stdlib-jdk7-1.7.22.jar;%APP_HOME%\lib\okhttp-4.10.0.jar;%APP_HOME%\lib\kotlinx-serialization-core-jvm-1.4.1.jar;%APP_HOME%\lib\apollo-api-jvm-3.7.4.jar;%APP_HOME%\lib\apollo-mpp-utils-jvm-3.7.4.jar;%APP_HOME%\lib\apollo-annotations-jvm-3.7.4.jar;%APP_HOME%\lib\kotlin-stdlib-1.7.22.jar;%APP_HOME%\lib\clikt-jvm-3.5.0.jar;%APP_HOME%\lib\okio-jvm-3.2.0.jar;%APP_HOME%\lib\uuid-jvm-0.3.1.jar;%APP_HOME%\lib\kotlin-stdlib-common-1.8.10.jar;%APP_HOME%\lib\graphiql-spring-boot-starter-5.0.2.jar;%APP_HOME%\lib\spring-boot-starter-websocket-3.0.1.jar;%APP_HOME%\lib\spring-boot-starter-web-3.0.1.jar;%APP_HOME%\lib\spring-boot-starter-data-jpa-3.0.1.jar;%APP_HOME%\lib\spring-boot-starter-data-redis-reactive-3.0.1.jar;%APP_HOME%\lib\spring-boot-starter-data-redis-3.0.1.jar;%APP_HOME%\lib\kotlin-stdlib-jdk8-1.8.10.jar;%APP_HOME%\lib\spring-boot-starter-validation-3.0.2.jar;%APP_HOME%\lib\jedis-4.4.0-m2.jar;%APP_HOME%\lib\json-20090211.jar;%APP_HOME%\lib\gson-2.8.5.jar;%APP_HOME%\lib\commons-validator-1.7.jar;%APP_HOME%\lib\postgresql-42.3.1.jar;%APP_HOME%\lib\opencsv-4.6.jar;%APP_HOME%\lib\h2-2.1.214.jar;%APP_HOME%\lib\json-path-2.7.0.jar;%APP_HOME%\lib\json-smart-2.4.8.jar;%APP_HOME%\lib\spring-webmvc-6.0.3.jar;%APP_HOME%\lib\spring-graphql-1.1.1.jar;%APP_HOME%\lib\spring-data-jpa-3.0.0.jar;%APP_HOME%\lib\spring-boot-starter-aop-3.0.1.jar;%APP_HOME%\lib\spring-boot-starter-jdbc-3.0.1.jar;%APP_HOME%\lib\spring-boot-starter-3.0.1.jar;%APP_HOME%\lib\graphiql-spring-boot-autoconfigure-5.0.2.jar;%APP_HOME%\lib\spring-boot-autoconfigure-3.0.1.jar;%APP_HOME%\lib\spring-boot-3.0.1.jar;%APP_HOME%\lib\spring-data-redis-3.0.0.jar;%APP_HOME%\lib\spring-data-keyvalue-3.0.0.jar;%APP_HOME%\lib\spring-context-support-6.0.3.jar;%APP_HOME%\lib\spring-websocket-6.0.3.jar;%APP_HOME%\lib\spring-context-6.0.3.jar;%APP_HOME%\lib\spring-expression-6.0.3.jar;%APP_HOME%\lib\spring-boot-starter-tomcat-3.0.1.jar;%APP_HOME%\lib\tomcat-embed-websocket-10.1.4.jar;%APP_HOME%\lib\tomcat-embed-core-10.1.4.jar;%APP_HOME%\lib\lettuce-core-6.2.2.RELEASE.jar;%APP_HOME%\lib\netty-handler-4.1.86.Final.jar;%APP_HOME%\lib\netty-transport-native-unix-common-4.1.86.Final.jar;%APP_HOME%\lib\netty-codec-4.1.86.Final.jar;%APP_HOME%\lib\netty-transport-4.1.86.Final.jar;%APP_HOME%\lib\netty-buffer-4.1.86.Final.jar;%APP_HOME%\lib\federation-graphql-java-support-2.1.1.jar;%APP_HOME%\lib\graphql-java-19.6.jar;%APP_HOME%\lib\reactor-core-3.4.22.jar;%APP_HOME%\lib\reactive-streams-1.0.4.jar;%APP_HOME%\lib\jakarta.annotation-api-2.1.1.jar;%APP_HOME%\lib\spring-web-6.0.3.jar;%APP_HOME%\lib\spring-data-commons-3.0.0.jar;%APP_HOME%\lib\spring-orm-6.0.3.jar;%APP_HOME%\lib\spring-aop-6.0.3.jar;%APP_HOME%\lib\spring-jdbc-6.0.3.jar;%APP_HOME%\lib\spring-tx-6.0.3.jar;%APP_HOME%\lib\spring-oxm-6.0.3.jar;%APP_HOME%\lib\spring-messaging-6.0.3.jar;%APP_HOME%\lib\spring-beans-6.0.3.jar;%APP_HOME%\lib\spring-boot-starter-logging-3.0.1.jar;%APP_HOME%\lib\log4j-to-slf4j-2.19.0.jar;%APP_HOME%\lib\log4j-api-2.19.0.jar;%APP_HOME%\lib\tomcat-embed-el-10.1.4.jar;%APP_HOME%\lib\spring-aspects-6.0.3.jar;%APP_HOME%\lib\aspectjweaver-1.9.19.jar;%APP_HOME%\lib\logback-classic-1.4.5.jar;%APP_HOME%\lib\logback-core-1.4.5.jar;%APP_HOME%\lib\java-dataloader-3.2.0.jar;%APP_HOME%\lib\HikariCP-5.0.1.jar;%APP_HOME%\lib\jul-to-slf4j-2.0.6.jar;%APP_HOME%\lib\slf4j-api-2.0.6.jar;%APP_HOME%\lib\netty-resolver-4.1.86.Final.jar;%APP_HOME%\lib\netty-common-4.1.86.Final.jar;%APP_HOME%\lib\spring-core-6.0.3.jar;%APP_HOME%\lib\spring-jcl-6.0.3.jar;%APP_HOME%\lib\jakarta.servlet-api-6.0.0.jar;%APP_HOME%\lib\hibernate-validator-8.0.0.Final.jar;%APP_HOME%\lib\jakarta.validation-api-3.0.2.jar;%APP_HOME%\lib\hibernate-core-6.1.6.Final.jar;%APP_HOME%\lib\byte-buddy-1.12.20.jar;%APP_HOME%\lib\protobuf-java-3.21.7.jar;%APP_HOME%\lib\spring-boot-configuration-processor-3.0.1.jar;%APP_HOME%\lib\jboss-logging-3.5.0.Final.jar;%APP_HOME%\lib\jakarta.transaction-api-2.0.1.jar;%APP_HOME%\lib\snakeyaml-1.33.jar;%APP_HOME%\lib\jaxb-runtime-4.0.1.jar;%APP_HOME%\lib\jaxb-core-4.0.1.jar;%APP_HOME%\lib\jakarta.xml.bind-api-4.0.0.jar;%APP_HOME%\lib\classmate-1.5.1.jar;%APP_HOME%\lib\jakarta.persistence-api-3.1.0.jar;%APP_HOME%\lib\angus-activation-1.0.0.jar;%APP_HOME%\lib\jakarta.activation-api-2.1.0.jar;%APP_HOME%\lib\commons-pool2-2.11.1.jar;%APP_HOME%\lib\commons-text-1.3.jar;%APP_HOME%\lib\commons-lang3-3.12.0.jar;%APP_HOME%\lib\txw2-4.0.1.jar;%APP_HOME%\lib\javapoet-1.13.0.jar;%APP_HOME%\lib\commons-beanutils-1.9.4.jar;%APP_HOME%\lib\commons-digester-2.1.jar;%APP_HOME%\lib\commons-logging-1.2.jar;%APP_HOME%\lib\commons-collections-3.2.2.jar;%APP_HOME%\lib\checker-qual-3.5.0.jar;%APP_HOME%\lib\commons-collections4-4.2.jar;%APP_HOME%\lib\annotations-23.0.0.jar;%APP_HOME%\lib\hibernate-commons-annotations-6.0.2.Final.jar;%APP_HOME%\lib\jandex-2.4.2.Final.jar;%APP_HOME%\lib\jakarta.inject-api-2.0.0.jar;%APP_HOME%\lib\antlr4-runtime-4.10.1.jar;%APP_HOME%\lib\context-propagation-1.0.0.jar;%APP_HOME%\lib\micrometer-observation-1.10.2.jar;%APP_HOME%\lib\micrometer-commons-1.10.2.jar;%APP_HOME%\lib\federation-graphql-java-support-api-2.1.1.jar;%APP_HOME%\lib\datafaker-1.6.0.jar;%APP_HOME%\lib\accessors-smart-2.4.8.jar;%APP_HOME%\lib\istack-commons-runtime-4.1.1.jar;%APP_HOME%\lib\generex-1.0.2.jar;%APP_HOME%\lib\asm-9.1.jar;%APP_HOME%\lib\automaton-1.11-8.jar


@rem Execute multiplatformKotlin
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %MULTIPLATFORM_KOTLIN_OPTS%  -classpath "%CLASSPATH%" es/unizar/iaaa/tfg/GraphqlDgsApplicationKt %*

:end
@rem End local scope for the variables with windows NT shell
if %ERRORLEVEL% equ 0 goto mainEnd

:fail
rem Set variable MULTIPLATFORM_KOTLIN_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
set EXIT_CODE=%ERRORLEVEL%
if %EXIT_CODE% equ 0 set EXIT_CODE=1
if not ""=="%MULTIPLATFORM_KOTLIN_EXIT_CONSOLE%" exit %EXIT_CODE%
exit /b %EXIT_CODE%

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
