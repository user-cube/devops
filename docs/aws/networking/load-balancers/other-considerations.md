---
id: other-elb-considerations
sidebar_label: "Other ELB Considerations"
title: "Other ELB Considerations"
---

# Load Balancers – Deployment Modes

**Public Load Balancers**  
Deployed in **public subnets** and accessible by users on the **public internet**. Ideal for frontend applications or APIs exposed to external clients.

**Private Load Balancers**  
Deployed in **private subnets**, accessible only by resources **within the AWS network** (e.g., internal services, VPC-connected environments). Useful for internal microservices or backend communication.

---

# Listener

A **listener** is a process that checks for incoming connection requests on a **specific protocol and port**.

Each load balancer must have at least one listener configured.  
Examples:
- HTTP on port 80
- HTTPS on port 443
- TCP on port 3306 (for database connections using NLB)

---

# Target Group

**Target Groups** are responsible for routing incoming requests to one or more **registered targets** (e.g., EC2 instances, IP addresses, Lambda functions).

Each target group is associated with:
- A **protocol** and **port**
- A set of **health check settings**
- A list of **registered targets**

**Health checks** are performed at the **target group level** to monitor the availability and health of registered targets. If a target is marked as unhealthy, the load balancer stops routing traffic to it until it recovers.

---