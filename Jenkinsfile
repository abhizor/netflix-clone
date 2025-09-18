pipeline{
     agent any
     stages{
             stage('code'){
                     steps{
		         git url: 'https://github.com/abhizor/netflix-clone.git' ,branch: 'main'
		     }
	     }
            stage('Build'){
               steps{   
	                  Docker build . -t abhishar7225/netflix:latest
	           }
	    }

            stage('Deploy'){
                        steps{
                                docker-compose down
				docker-compoise up -d
				
			}
	    }
     }
     





}
