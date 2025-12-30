# SKT Open Source Portal

Welcome to the official GitHub repository for SK Telecom's Open Source Portal. The portal is hosted at **https://sktelecom.github.io/**

SK Telecom shares innovative technologies across AI, Big Data, Cloud, and more as open source projects. We welcome developers worldwide to participate, contribute, and collaborate with us.

## Overview

This website is built with:
- **[Hugo](https://gohugo.io/)** - Fast, modern static site generator
- **[Docsy](https://github.com/google/docsy)** - Professional documentation theme for open source projects
- **GitHub Actions** - Automated build and deployment to GitHub Pages

All content is written in Markdown, automatically built by Hugo, and deployed to GitHub Pages on every commit to the `master` branch.


## Getting Started

### Prerequisites
- [Hugo v0.146.0+](https://gohugo.io/installation/) (Extended version required)
- Git with submodules support
- Node.js 18+ (optional, for asset compilation)

### Local Development

```bash
# Clone the repository
git clone --recurse-submodules https://github.com/sktelecom/sktelecom.github.io.git
cd sktelecom.github.io

# Start Hugo development server
hugo server

# Open your browser to http://localhost:1313/
```

### Building

```bash
# Build production-ready site
hugo --minify

# Output will be generated in ./public directory
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for detailed instructions (in Korean).

To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-contribution`)
3. Commit your changes (`git commit -m 'Add amazing contribution'`)
4. Push to the branch (`git push origin feature/amazing-contribution`)
5. Open a Pull Request

## Deployment

This repository uses **GitHub Actions** for automated deployment:
- Every push to the `master` branch triggers an automatic build
- Hugo generates the static site and pushes to the `gh-pages` branch
- GitHub Pages automatically serves the updated site

See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for workflow details.

## Contact & Support

**Questions or Inquiries?**
- 📌 [Create an issue](https://github.com/sktelecom/sktelecom.github.io/issues/new) on GitHub
- Email OSPO (Open Source Program Office): [opensource@sktelecom.com](mailto:opensource@sktelecom.com)
- Visit our [About Page](https://sktelecom.github.io/about/) to learn more about SK Telecom's open source initiatives

## 📄 License

- **Website Code**: [Apache License 2.0](LICENSE-CODE)
- **Content**: [Creative Commons Attribution 4.0 International (CC-BY-4.0)](LICENSE)

See individual LICENSE files in the repository for details.
