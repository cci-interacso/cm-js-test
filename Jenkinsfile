pipeline {
    agent { node { label 'slave' } }
    options {
        timeout(time: 6, unit: 'HOURS')
    }
    stages {
        stage("Get repo") {
            steps {
                git credentialsId: 'github-user-token', url: 'https://github.com/cci-interacso/cm-js-test.git'
            }
        }
        stage('Additional npm install') {
            steps {
                sh 'apt-get install curl'
                sh 'curl -sL https://deb.nodesource.com/setup_10.x | bash'
                sh 'apt-get install nodejs'
                sh 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npm run test'
            }
        }
    }
    post {
        always {
            deleteDir()
        }
        success {
            notifySuccessful()
        }
        failure {
            notifyFailed()
        }
    }
}



def notifyStarted() {
    // slackSend(channel: '#cm-qa', color: '#FFFF00', message: "STARTED: Environment: *${ENVIRONMENT}* Job: ${env.JOB_NAME} build: ${env.BUILD_NUMBER} More info at: ${env.BUILD_URL}")
}
def notifySuccessful() {
    // slackSend(channel: '#cm-qa', color: '#00FF00', message: "SUCCESSFUL: Environment: *${ENVIRONMENT}* Job: ${env.JOB_NAME} build: ${env.BUILD_NUMBER} More info at: ${env.BUILD_URL}")
}
def notifyFailed() {
    // slackSend(channel: '#cm-qa', color: '#FF0000', message: "FAILED: Job Environment: *${ENVIRONMENT}* Job: ${env.JOB_NAME} build: ${env.BUILD_NUMBER} More info at: ${env.BUILD_URL}")
}