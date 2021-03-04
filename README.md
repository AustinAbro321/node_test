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
    1. Create personal fork of repo. You will need to change actions code most likely, and execute the workflow
    2. Create an account with AWS. You can set up roles with IAM, however I am just using admin since it's my account. (This wouldn't fly in production). You then need to get your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY and store them as secrets in the repo
    3. Download the cli for aws and put in your credentials. 
    4. Download the cli eksctl, this allows you to create k8s clusters from the command line. This takes almost 20 minutes! If it feels like its not working don't fret 
    5. Create a cluster. Example command below. The example cluster is called test-cluster and creates 2 linux t2.micro ec2 instances.eksctl create cluster --name test-cluster --region us-east-2 --nodegroup-name linux-nodes --node-type t2.micro --nodes 2. Replace the values of AWS_REGION and EKS_CLUSTER_NAME in your workflow depending on the values you choose
    6. Create an ECR repository to store your images. ex: aws ecr create-repository --repository-name example-eks --region us-east-2`. Replace the value of `ECR_REPOSITORY` in the workflow below with your repository's name if you use something other than `example-eks`.

# Clean up! The environment it costs a few dollars a day!
AWS already has a nice guide on how to clean up just follow this exactly: https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html

# What's next
1. Automating the setup with terraform. (Don't look at the tf file currently in here it's unfinished and incorrect haha)
2. Using kubernetes deploy front end and backend and DB
3. I don't like that I set the image name in my workflow it feels messy since my deploy.yml is useless without the set image command. I'm hoping I find a better way to do that
4. 