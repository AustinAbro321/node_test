# What is this application
This is an example application made to show off automated building and testing using docker and kubernetes. 
# What does this application do
If run from docker-compose: 
    Front end which gives a simple greeting and allows users to post greeting
    Backend which recieves and creates greeting from APIs, also /url returns a json.   
    Entire build is automatically tested
If run from kubernetes using workflow:
    Backend with /url which returns a json string

# How to run locally with docker compose
docker-compose --build up. Yes that's it :)

# Run on AWS with kubernetes: 
    1. Create personal fork of repo.
    2. Create an <a href="https://aws.amazon.com/account/">AWS account</a>
    3. Create a <a href="https://app.terraform.io">Terraform Cloud account</a>
    4. 

# Clean up! The environment it costs a few dollars a day!
AWS already has a nice guide on how to clean up just follow this exactly: https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html

# What's next
1. Automating the setup with terraform. (Don't look at the tf file currently in here it's unfinished and incorrect haha)
2. Using kubernetes deploy front end and backend and DB
3. I don't like that I set the image name in my workflow it feels messy since my deploy.yml is useless without the set image command. I'm hoping I find a better way to do that
4. 