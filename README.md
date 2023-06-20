# Foundry with Hardhat Template

This repository provides a template for contract development with Foundry and Hardhat.

## Getting started

Use Foundry:

```bash
forge install
forge test
```

Use Hardhat:

```bash
npm install
npx hardhat test
```

Install libraries with Foundry which work with Hardhat.

```bash
forge install rari-capital/solmate
```

### Test

Write / run tests with either Hardhat or Foundry:

```bash
forge test
# or
npx hardhat test
```

### Compile

```bash
forge build
# or
npx hardhat compile
```

### Run a local node

```bash
anvil
# or
npx hardhat node
```

### Notes

Whenever you install new libraries using Foundry, make sure to update your `remappings.txt` file by running `forge remappings > remappings.txt`. This is required because we use `hardhat-preprocessor` and the `remappings.txt` file to allow Hardhat to resolve libraries you install with Foundry.
