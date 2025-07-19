---
id: cross-zone-load-balancing
sidebar_label: "Cross Zone Load Balancing"
title: "Cross Zone Load Balancing"
---

# Cross-Zone Load Balancing

**Cross-Zone Load Balancing** is a feature in AWS Elastic Load Balancers that allows traffic to be **evenly distributed across all registered targets in all enabled Availability Zones (AZs)**, regardless of which AZ the request originated from.

---

## How It Works

By default, a Load Balancer routes traffic **only to targets within the same Availability Zone** as the Load Balancer node that received the request.

When **Cross-Zone Load Balancing** is **enabled**:
- Each Load Balancer node can **forward traffic to any target** in any AZ.
- This allows **more even traffic distribution**, especially when the number of targets is not balanced across zones.

---

## Use Case Example

Imagine you have:
- 2 Availability Zones (AZ-a and AZ-b)
- 1 target in AZ-a and 3 targets in AZ-b

Without cross-zone:
- 50% of traffic goes to AZ-a, but only one target handles it
- 50% goes to AZ-b, where it’s divided among 3 targets

With cross-zone:
- Traffic is **evenly divided among all 4 targets**, regardless of AZ

---

## Availability Per Load Balancer Type

| Load Balancer Type | Cross-Zone Supported | Enabled by Default |
|--------------------|----------------------|---------------------|
| Classic (CLB)      | ✅ Yes               | ✅ Yes              |
| Application (ALB)  | ✅ Yes               | ✅ Yes              |
| Network (NLB)      | ✅ Yes               | ❌ No (Must enable manually) |

> For **NLB**, enabling cross-zone load balancing may incur additional data transfer charges across AZs.

---

## Considerations

- **Cost**: Cross-AZ traffic incurs data transfer charges in AWS. This is especially relevant for **Network Load Balancers**.
- **Performance**: While cross-zone improves traffic distribution, it may increase latency slightly due to inter-AZ communication.
- **Design Tip**: Try to keep the number of targets balanced across AZs when possible, even with cross-zone enabled.

---

## Best Practices

- Use **cross-zone load balancing** when:
  - You have an **uneven number of targets** per AZ
  - You want **simplified traffic management**
  - You're using **Auto Scaling** and target counts fluctuate between zones

- Disable it when:
  - You want to avoid **cross-AZ data charges**
  - Your targets are **evenly distributed per AZ**

---

Cross-zone load balancing is a powerful tool for optimizing resilience and distribution logic — especially in multi-AZ, large-scale architectures.