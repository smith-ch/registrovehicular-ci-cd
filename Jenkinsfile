pipeline {
  agent any
  stages {
    stage('Checkout') { steps { checkout scm }}
    stage('Install y Lint') { steps { sh 'cd backend && npm install && npm run lint' }}
    stage('Test') { steps { sh 'cd backend && npm test' }}
    stage('Docker Build') {
      steps {
        sh 'docker build -f docker/Dockerfile.backend -t registrovehicular-backend .'   
        sh 'docker build -f docker/Dockerfile.frontend -t registrovehicular-frontend .' 
      }
    }
    stage('Push') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
          sh 'echo $PASS | docker login -u $USER --password-stdin'
          sh 'docker push registrovehicular-backend'
          sh 'docker push registrovehicular-frontend'
        }
      }
    }
  }
}