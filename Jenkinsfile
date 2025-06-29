Jenkinsfile
    pipeline{
        agent any
        //escenarios -> escenarios -> pasos
        environment{
            NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
        }
        stages{
            stage('Proceso de build y test'){
                agent {
                    docker {
                        image 'node:22'
                        reuseNode true
                    }
                }
                stages {
                    stage("Instalacion de dependencias")
                        steps {
                            sh 'npm ci'
                        }
                    stage("Ejecución de pruebas")
                        steps {
                            sh 'npm run test:cov'
                        }
                    stage("construccion de la aplicacion")
                        steps {
                            sh 'npm run build'
                        }
                }
                
            }
        }
    }