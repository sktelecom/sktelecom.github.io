---
title: "SKT Passkey"
linkTitle: "SKT Passkey"
weight: 6
type: docs
description: >
  WebAuthn/FIDO2-based passwordless authentication platform
---

SKT Passkey is a passwordless authentication solution based on the WebAuthn (FIDO2) standard. It provides safe and convenient login experience using biometric recognition or device PIN, and can be integrated with SK Telecom's Passkey Platform to build enterprise-grade reliable authentication systems.

![Passkey](passkey.png)

## Project Information

* Developer: SK Telecom Passkey Team
* License: Apache License 2.0
* GitHub Organization: [https://github.com/skt-passkey](https://github.com/skt-passkey)
* Main Repository:
  - [passkey-rp-sample](https://github.com/skt-passkey/passkey-rp-sample) - Relying Party sample application

## What is Passkey?

Passkey is a safe and convenient authentication method that replaces traditional passwords:

* Passwordless: No need to remember or manage passwords
* Secure: Uses cryptographic authentication with device-bound credentials
* Convenient: Biometric or device PIN-based authentication
* Phishing-resistant: Resistant to phishing and credential theft attacks
* Interoperable: Works across different platforms and devices

## Advantages of SKT Passkey Platform

### 1. Enterprise-Grade Reliability
* Large-scale deployment validation
* 24/7 stable service
* Utilizing SK Telecom's infrastructure

### 2. Easy Integration
* RESTful API provided
* Developer-friendly SDK
* Comprehensive documentation and sample code
* OAuth2-based authentication

### 3. Standards Compliance
* W3C WebAuthn standard
* FIDO2 authentication
* Open standard support

### 4. Multi-platform Support
* Web browsers (Chrome, Safari, Edge, etc.)
* iOS applications
* Android applications
* Cross-device authentication

## Architecture

### Key Components

Authenticator: Device that performs authentication
- Built-in authenticators (fingerprint, face recognition)
- External security keys
- Platform-specific authenticators

Relying Party (RP): Your application that uses Passkey
- Communicates with the Passkey platform
- Verifies authentication responses
- Manages user credentials

Passkey Platform: SK Telecom's authentication service
- Handles registration and authentication flows
- Manages credential lifecycle
- Provides API and SDKs

## Use Cases

### Consumer Services
* Financial services and banking
* E-commerce and retail
* Content streaming platforms
* Social media and messaging

### Enterprise Applications
* Single Sign-On (SSO)
* VPN and remote access
* Internal applications
* Workforce identity management

### Mobile Applications
* In-app authentication
* Biometric-based login
* Secure transaction verification

## Integration Flow

```
1. User Registration
   ├─ Generate credential pair (public/private key)
   ├─ Store public key in server
   └─ Store private key in device

2. Authentication
   ├─ User initiates login
   ├─ Server sends challenge
   ├─ Device signs challenge with private key
   ├─ Server verifies signature with public key
   └─ User authenticated
```

## Security Features

### Credential Security
* Private keys never leave the user's device
* Cryptographically bound to specific devices
* Protected by device security mechanisms (TPM, Secure Enclave)

### Attack Resistance
* Phishing-resistant: Server verification prevents phishing
* Replay-attack resistant: Challenge-response mechanism
* Credential theft resistant: Biometric/PIN protection

### User Privacy
* No shared secrets across accounts
* Server never sees biometric data
* Privacy-preserving authentication

## Resources

### Official Documentation
* GitHub: [https://github.com/skt-passkey](https://github.com/skt-passkey)
* Sample RP: [https://github.com/skt-passkey/passkey-rp-sample](https://github.com/skt-passkey/passkey-rp-sample)

### Related Standards and Documentation
* W3C WebAuthn: [https://www.w3.org/TR/webauthn/](https://www.w3.org/TR/webauthn/)
* FIDO Alliance: [https://fidoalliance.org/](https://fidoalliance.org/)
* Passkey: [https://www.passkey-sktelecom.com/](https://www.passkey-sktelecom.com/)

## License

Apache License 2.0 - Commercial use allowed
