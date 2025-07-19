---
id: load-balancer-comparison
sidebar_label: "AWS Load Balancer Comparison"
title: "AWS Load Balancer Comparison"
---


# AWS Load Balancer Comparison

| Feature                          | Classic Load Balancer (CLB)           | Application Load Balancer (ALB)     | Network Load Balancer (NLB)         |
|----------------------------------|----------------------------------------|--------------------------------------|--------------------------------------|
| **Layer**                        | Layer 4 & Layer 7                      | Layer 7 (HTTP/HTTPS)                 | Layer 4 (TCP/UDP/TLS)                |
| **Use Case**                     | Legacy applications                   | Modern web applications              | High-performance, low-latency apps   |
| **Routing Capabilities**         | Basic                                 | Host-based & path-based routing      | IP-based routing                     |
| **SSL/TLS Support**              | Single certificate only               | Multiple certificates via SNI        | TLS termination supported            |
| **WebSocket Support**            | ❌                                     | ✅                                   | ✅                                   |
| **HTTP/2 Support**               | ❌                                     | ✅                                   | ❌                                   |
| **Health Checks**                | Basic (per instance)                  | Advanced (per target)                | High-performance health checks       |
| **Static IP Support**           | ❌                                     | ❌                                   | ✅ (via Elastic IPs)                 |
| **Target Types**                 | EC2 instances only                    | EC2, ECS, Lambda, IPs                | EC2, IPs                             |
| **CloudWatch Metrics**           | Limited                               | Detailed                             | Detailed                             |
| **Recommended For New Workloads**| ❌                                     | ✅                                   | ✅                                   |

> **Note**: AWS recommends using ALB or NLB for all new architectures. CLB is only maintained for backward compatibility.