def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

pipeline {

    agent any
    stages {
        stage('stop'){
            steps{
                //sh 'docker rm -f test_node_app && echo "container removed" || echo "container does not exist"'                
                sh 'docker-compose down && echo "container removed" || echo "container does not exist"'                
            }
        }
        stage('Build Node App') {
            steps {
                  echo 'Composing node app'
                  sh 'docker-compose up --build -d'
                }
        }

  }
   
}
