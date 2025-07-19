---
id: load-balancers-intro
sidebar_label: "Elastic Load Balancers"
title: "Elastic Load Balancers"
---

# Elastic Load Balancers

Elastic Load Balancers (ELBs) are essential tools for ensuring **high availability**, **fault tolerance**, and minimizing **downtime** in modern cloud-based applications.

By placing multiple instances of an application behind a load balancer, traffic is intelligently distributed, allowing clients to interact with a **single endpoint**, without needing to know the underlying infrastructure.

When a request is received, the load balancer forwards it to one of the available application instances, improving reliability, performance, and scalability.

---

## ELB Types

AWS offers three types of Elastic Load Balancers, each optimized for different use cases:

- **Classic Load Balancer (CLB)** – Legacy applications
- **Application Load Balancer (ALB)** – HTTP, HTTPS, and WebSocket-based applications
- **Network Load Balancer (NLB)** – High-performance TCP/UDP-based workloads

---

## Deployment Architecture

To deploy an ELB, **at least two subnets across different Availability Zones** are required. This ensures redundancy and high availability.

When an ELB is deployed in a **public subnet** within an Availability Zone, AWS automatically creates a **Load Balancer Node** in that zone. This node is responsible for receiving incoming traffic and forwarding it to the healthy backend targets (e.g., EC2 instances, containers).

This architecture allows the ELB to handle:
- Automatic failover across zones
- Fault tolerance against single zone failures
- Seamless scaling as application demand grows