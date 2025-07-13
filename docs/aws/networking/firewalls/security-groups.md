---
id: security-groups
sidebar_label: Security Groups
title: Security Groups
---

# AWS Security Groups

Security Groups act as stateful firewalls for individual AWS resources such as EC2 instances, Application Load Balancers (ALB), and RDS databases.

## Key Characteristics
- Security Groups are stateful: if you allow inbound traffic, the response is automatically allowed outbound.
- They control both inbound and outbound traffic at the instance level.
- You can assign multiple security groups to a single resource; all rules are merged and evaluated together.
- By default, security groups have an outbound rule that allows all traffic, which you can remove or modify.

![Security Groups Diagram](/img/cloud/aws/firewalls/security-group.jpg)

## Multiple Security Groups
- Multiple security groups can be attached to a resource.
- The rules from all attached security groups are merged (union of all rules).

## Relationship with NACLs
- Each subnet in a VPC must be associated with a Network ACL (NACL).
- A NACL can be associated with multiple subnets, but each subnet can only be associated with one NACL at a time.

---

**Learn more:**
- [AWS Security Groups Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html)