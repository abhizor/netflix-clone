pipeline{
     Agent any
     Stages{
             Stage('code'){
                     steps{
		         git url: 'https://github.com/abhizor/netflix-clone.git' ,branch: 'main'
		     }
	     }
            Stage('Build'){
               steps{   
	                  Docker build . -t abhishar7225/netflix:latest
	           }
	    }

            Stage('Deploy'){
                        steps{
                                docker-compose down
				docker-compoise up -d
				
			}
	    }
     }
     





}
