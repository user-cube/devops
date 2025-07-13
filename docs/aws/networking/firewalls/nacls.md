---
id: nacls
sidebar_label: NACLs
title: Network ACLs (NACLs)
---

# AWS Network ACLs (NACLs)

Network Access Control Lists (NACLs) are stateless firewalls that filter inbound and outbound traffic at the subnet level in AWS VPCs.

## Key Characteristics
- NACLs filter traffic entering and leaving subnets.
- They do not filter traffic within the same subnet.
- NACLs are stateless: you must define both inbound and outbound rules explicitly.
- Rules are evaluated in order, and the first matching rule is applied.
- NACLs can be associated with multiple subnets, but each subnet can be associated with only one NACL at a time.

![NACLs Diagram](/img/cloud/aws/firewalls/nacls.png)

## Rules

- Rules can be either **allow** or **deny**.
- Each rule has a unique rule number (ID) and rules are processed in ascending order.
- The first rule that matches the traffic is applied, and no further rules are evaluated.
- If no rule matches, the default action is to deny the traffic.

**Example:**
| Rule # | Type   | Protocol | Port Range | Source        | Action |
|--------|--------|----------|------------|---------------|--------|
| 100    | Inbound| TCP      | 80         | 0.0.0.0/0     | ALLOW  |
| 110    | Inbound| TCP      | 22         | 203.0.113.0/24| ALLOW  |
| 120    | Inbound| ALL      | ALL        | 0.0.0.0/0     | DENY   |


:::warning Important Considerations
By default NACLs do not filter traffic from/to the following resources:
- Amazon DNS
- Amazon DHCP
- Amazon EC2 instance metada
- Amazon ECS metada endpoints
- Windows License Activation
- Amazon Tine Sync Service
- IPs reservados pelo default VPC Router
:::


---

**Learn more:**
- [AWS Network ACLs Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html)