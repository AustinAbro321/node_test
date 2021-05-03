# What is this application
This is an example application made to show off automated building and testing using docker and kubernetes. 
# What does this application do
If run from docker-compose: <br/>
    Front end which gives a simple greeting and allows users to post greeting
    Backend which recieves and creates greeting from APIs, also /url returns a json.   
    Entire build is automatically tested<br/>
If run from kubernetes using github actions:<br/>
    Automated deployment on commit to main with github actions.
    Pushes docker image of backend to dockerhub. Spins up K8s cluster using terraform and AWS.
    Runs pods and load balancer on AWS. 
    Backend has a get request of /url which returns a json string with the current time.

# How to run locally with docker compose
docker-compose --build up. Yes that's it :)

# Run on AWS with kubernetes: 
    1. Create personal fork of repo.
    2. Create an AWS account
    3. Create a Terraform Cloud account
    4. Create a docker hub account
    5. Create a new workspace in your terraform cloud account. It should be the type "API-driven workflow". Name the workspace whatever you like. 
    6. Click on the workspace tab variables, add the following secret variables and mark them sensitive. You can figure out how to find them here
        a. AWS_ACCESS_KEY_ID 
        b. AWS_SECRET_ACCESS_KEY
    7. Change the workspace name in providers.tf to the workspace name you choose earlier. 
    8. Change the organization name to your organization name in terraform. If you just created your account and haven't added any orgs it'll be your username
    9. Create an API token in terraform settings > API token. Keep the value
    10. Make a new github secret TF_API_TOKEN with the value you saved in the last step. 
    11. login to docker hub click on your username > account settings > security > new access token. Create a new access token and save the value 
    12. Create two new secrets in github where token is the value from step 11. 
        a.  DOCKERHUB_USERNAME
        b.  DOCKERHUB_TOKEN
    13. Go to main.yml and edit step with ID build-node to use your account. 
    14. Deploy your application. 

# Clean up! The environment costs money!
Go to your terraform cloud account, press destruction and deletion and follow instructions for queue destroy plan. 

# What's next
1. Using kubernetes deploy front end and backend and DB.
2. Better understand my exact terraform deployment like what my roles do and such. 