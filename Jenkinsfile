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
                sh 'docker rm -f test_node_app && echo "container removed" || echo "container does not exist"'                
            }
        }
        stage('Build Node App') {
            steps {
                  echo 'Building Node app...'
                  sh 'npm install-test'
                  sh 'docker build . -t node_test_image'
                  sh 'docker run -d -p 3000:3000 --name test_node_app node_test_image'
                }
        }
  }
   
    post { 
        success {
      hangoutsNotify message: "Chris Gallivan:::SUCCESS",token: "8TAhr5dP97wKtVlaaWya6Hn5l", threadByJob: true    
		
        }
    
        failure {
	  	hangoutsNotify message: "Chris Gallivan:::FAILURE",token: "8TAhr5dP97wKtVlaaWya6Hn5l", threadByJob: true
        }
    }
}
