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
	                sh  'docker build . -t abhishar7225/netflix:latest'
	           }
	    }

            stage('Deploy'){
                        steps{
                            sh    'cd path/to/directory && docker-compose down'
				
			}
	    }
     }
     





}
