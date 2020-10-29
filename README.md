# aws-ecs-fargate
Code for creating a micro-service to run it using ECS Fargate
* Create a docker image and push the image to the ECR
* Create a cluster using the AWS Fargate template in the ECS
* Create a task definition with launch type as FARGATE. Provide the task memory and CPU details required to run the task. Add the image URI of the image created in the step 1 in the container definition.
* Create a service in the cluster defined in the step 2 using the task definition defined in the step 4. Configure a load balancer and target group. Add a listener rule to route the traffic from LB to the container based on the path defined in the server.js file
