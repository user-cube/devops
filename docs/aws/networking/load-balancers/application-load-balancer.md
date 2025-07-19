---
id: application-load-balancer
sidebar_label: "Application Load Balancers"
title: "Application Load Balancers"
---

# Application Load Balancers (ALB)

Application Load Balancers are designed to operate at **Layer 7 (Application Layer)** of the OSI model and support only **HTTP**, **HTTPS**, and **WebSocket** protocols.

If your application requires other protocols (e.g., TCP or UDP), ALB is **not compatible** — in those cases, consider using a **Network Load Balancer**.

![NACLs Diagram](/img/cloud/aws/elb/alb.png)

---

## Key Features

- **Advanced Request Routing**:
  - Path-based routing (e.g., `/api/*`, `/static/*`)
  - Host-based routing (e.g., `api.example.com`, `app.example.com`)
  - Routing based on:
    - HTTP headers
    - Query strings
    - HTTP methods (GET, POST, etc.)
    - Source IP addresses

- **HTTP Redirects & Custom Responses**:
  - Supports **HTTP 301/302 redirects**
  - Allows **custom fixed responses** (e.g., returning a 403 or a custom message)

- **Health Checks**:
  - Performs health checks on targets (e.g., EC2 instances, containers, IPs)
  - Automatically stops sending traffic to unhealthy targets

- **SSL Termination**:
  - SSL certificates are managed **directly on the ALB**
  - Simplifies certificate management and reduces overhead on backend instances

---

## Notes on SSL Termination

You can also choose to **terminate SSL on the EC2 instance itself**, but:
- It requires a **separate certificate** installed on each EC2 instance
- Adds complexity in managing certificates across multiple targets

The preferred and more scalable approach is to terminate SSL at the ALB level.

---

## Summary

Application Load Balancers are ideal for:
- Modern **web applications**
- **Microservices** architectures
- Scenarios requiring **flexible, content-based routing**

They offer fine-grained control over traffic flow and integrate tightly with other AWS services like ECS, Lambda, and WAF.