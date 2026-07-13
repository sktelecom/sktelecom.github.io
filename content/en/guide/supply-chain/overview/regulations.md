---
title: "Regulatory Trends"
linkTitle: "Regulatory Trends"
weight: 2
type: docs
description: >
  Examines the state of software supply chain security regulations that are being strengthened worldwide, such as U.S. EO 14028 and the EU CRA.
---


## 1. United States: Executive Order 14028 (EO 14028)

In May 2021, the Biden administration issued the "Executive Order on Improving the Nation's Cybersecurity (Executive Order 14028)."

### Key Provisions
- Push toward SBOM requirements: EO 14028 directed defining the minimum elements of an SBOM (data fields, automation support, etc.) and secure software development practices; the SBOM submission and self-attestation requirements for federal suppliers were detailed in subsequent OMB guidance.
- NIST guideline compliance: Companies must comply with the Secure Software Development Framework (SSDF) defined by NIST (the U.S. National Institute of Standards and Technology).

## 2. European Union (EU): Cyber Resilience Act (CRA)

Through the Cyber Resilience Act (CRA), the EU has enacted into law security requirements spanning the entire lifecycle of digital products.

### Key Provisions
- CE marking certification: All products with digital elements can only be sold within the EU if they meet the cybersecurity requirements and bear the CE mark.
- Defined security support period: Manufacturers must provide security updates throughout the expected product use period, which is, in principle, at least five years. If the expected use period is shorter than five years, the support period matches it (Regulation (EU) 2024/2847, Article 13 and Recital 60). In other words, five years is a baseline, not a cap.
- Vulnerability reporting obligation: On becoming aware of an actively exploited vulnerability or a severe security incident, the manufacturer must submit an early warning to the coordinating CSIRT and ENISA within 24 hours, followed within 72 hours by a notification and, later, a final report (Regulation (EU) 2024/2847, Article 14).
- SBOM management: Manufacturers must identify and document (via an SBOM) the software components of their products.

## 3. South Korea: SW Supply Chain Security Guidelines

In step with the global trend, the South Korean government (the Ministry of Science and ICT, KISA, and the National Intelligence Service) has also released the "SW Supply Chain Security Guidelines" and is pursuing proof-of-concept initiatives.

### Key Contents (based on v1.0)
- Recommendation to adopt SBOM: It is recommended that an SBOM be generated and utilized when developing and delivering software in both the public and private sectors.
- Supplier security activities: Suppliers are advised to build a secure development environment, generate and provide an SBOM, and inspect for security vulnerabilities.

SK Telecom's requirements in response to these regulatory trends are laid out in the [SK Telecom Supply Chain Security Policy](../policy/).

## Related Documents

- [Supply Chain Security Overview](../): Concepts and notable cases of software supply chain attacks
- [SK Telecom Supply Chain Security Policy](../policy/): The specific policy that SK Telecom requires of suppliers
- [Supplier Guide](/en/guide/supply-chain/for-suppliers/): Guidance on SBOM generation and submission for suppliers
