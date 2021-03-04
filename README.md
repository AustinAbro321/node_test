# What is this application
This is an example application made to show off automated building and testing using docker and kubernetes. 
# What does this application do
If run from docker-compose: 
    Front end which gives a simple greeting and allows users to post greeting
    Backend which recieves and creates greeting from APIs, also /url returns a json.   
    Entire build is automatically tested
If run from kubernetes using workflow:
    Backend with /url which returns a json
# How to run
run with docker-compose locally:
    docker-compose --build up. Yes that's it :)
Run on AWS with kubernetes: 
    1. First thing to do is create an account with AWS. You can set up roles with IAM, however I am just using admin since it's my account. (This wouldn't fly in production)
    2. Download the cli for aws and put in your credentials. 
    esctl create cluster --name test-cluster --region us-east-2 --nodegroup-name linux-nodes --node-type t2.micro --nodes 2

# What's next
1. Potentially automating more of the deployment with terraform. (Don't look at the tf file currently in here it's unfinished and incorrect haha)
2. Using kubernetes deploy front end and backend and DB
3. I don't like that I set the image name in my workflow it feels messy, since my deploy.yml is useless without the set image command. I'm hoping I find a better way to do that
4. 