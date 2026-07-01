# CONTRIBUTING

Thank you for your interest in contributing to Bridge Tecnologia!

## Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read and adhere to our Code of Conduct.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the code style guidelines
* Include appropriate test cases
* Update documentation as needed
* End all files with a newline

## Development Setup

### Prerequisites
- Node.js 18+
- Python 3.11+ (for backend services)
- Docker (for containerized development)
- Git

### Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/repository.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit with descriptive messages: `git commit -am 'Add feature description'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Create a Pull Request

## Style Guidelines

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
  * 🎨 `:art:` when improving the format/structure of the code
  * 🐛 `:bug:` when fixing a bug
  * ✨ `:sparkles:` when introducing a new feature
  * 📚 `:books:` when writing docs
  * 🔒 `:lock:` when dealing with security
  * ⬆️ `:arrow_up:` when upgrading dependencies
  * ⬇️ `:arrow_down:` when downgrading dependencies
  * 🔧 `:wrench:` when updating configs

### Code Style

#### JavaScript/TypeScript
- Use ESLint configuration provided
- Use Prettier for code formatting
- 2 spaces for indentation
- Use semicolons
- Use arrow functions where appropriate

#### Python
- Follow PEP 8
- Use Black for formatting
- Use type hints
- Use docstrings for all functions and classes

## Testing

- Write tests for new functionality
- Ensure all tests pass: `npm test` or `pytest`
- Maintain code coverage at 80%+
- Run tests before submitting a pull request

## Documentation

- Update README.md if needed
- Update API documentation for backend changes
- Add comments to complex logic
- Keep documentation up-to-date

## Branch Strategy

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Production hotfixes

## Review Process

All pull requests must:
1. Pass all automated checks (lint, tests, build)
2. Be reviewed by at least one maintainer
3. Have CODEOWNERS approval if applicable
4. Have meaningful commit history
5. Update relevant documentation

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Questions?

Feel free to open an issue or reach out to the team!
