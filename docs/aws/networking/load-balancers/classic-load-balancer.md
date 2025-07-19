---
id: classic-load-balancer
sidebar_label: "Classic Load Balancers"
title: "Classic Load Balancers"
---

# Classic Load Balancers

The **Classic Load Balancer (CLB)** was the first load balancing service introduced by AWS. While it laid the foundation for scalable architectures in the cloud, it is now considered outdated and is generally **not recommended for new deployments**.

CLBs are typically used only for **legacy applications** that have not yet been migrated to newer load balancing solutions.

One of the most significant limitations of CLBs is their support for **only a single SSL/TLS certificate**. This makes them unsuitable for scenarios where multiple applications with different domains and certificates need to be load balanced under the same endpoint.

![NACLs Diagram](/img/cloud/aws/elb/clb.png)

---

## Additional Notes on Classic Load Balancers

- **Layer Support**: Operates at both **Layer 4 (TCP)** and **Layer 7 (HTTP/HTTPS)**, but lacks advanced Layer 7 features.
  
- **Lack of Flexibility**: Missing key features such as:
  - Host-based or path-based routing
  - WebSocket support
  - HTTP/2
  - Redirects
  - Fine-grained health checks

- **Scalability Limitations**: Less efficient in handling sudden traffic spikes compared to ALB or NLB.

- **Monitoring & Metrics**: Provides fewer CloudWatch metrics than modern load balancers, limiting observability.

- **Deprecation Notice**: While not officially deprecated, CLBs are **discouraged** in favor of **Application Load Balancers (ALB)** and **Network Load Balancers (NLB)**.

---

## When to Use (If Ever)

Use a Classic Load Balancer **only if**:
- You are maintaining a **legacy system** that already uses CLB.
- Migrating to ALB/NLB is not currently feasible due to technical or organizational constraints.