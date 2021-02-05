def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]
def loadValuesYaml(x){
  def valuesYaml = readYaml (file: './pipeline.yml')
  return valuesYaml[x];
}

pipeline {
  environment {
  //credentials
	    dockerHubCredential = loadValuesYaml('dockerHubCredential')
            awsCredential = loadValuesYaml('awsCredential')
	    
	    //docker config
	    imageName = loadValuesYaml('imageName')
	    slackChannel = loadValuesYaml('slackChannel')
	    dockerImage = ''
	    
	    //s3 config
            backendFile = loadValuesYaml('backendFile')
            backendPath = loadValuesYaml('backendPath')
	    
	    //additional external feedback
	    successAction = loadValuesYaml('successAction')
	    failureAction = loadValuesYaml('failureAction')  
	    app_url = ''      
	    
   }
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
        stage('Send image to docker hub') {

        }
  }
   
    post { 
        // success {
        // hangoutsNotify message: "Austin Abro:::SUCCESS",token: "8TAhr5dP97wKtVlaaWya6Hn5l", threadByJob: true    
		
        // }
    
        // failure {
	  	  // hangoutsNotify message: "Austin Abro:::FAILURE",token: "8TAhr5dP97wKtVlaaWya6Hn5l", threadByJob: true
        // }
    }
}
