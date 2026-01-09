# rspack-android-binding

Android ARM64 bindings for Rspack bundler, built using GitHub Actions.

## Overview

This project provides automated builds of Rspack native bindings for Android aarch64 architecture. The build process uses GitHub Actions to compile the Rust-based Rspack bundler for Android devices.

## Build Status

The workflow triggers on:
- Push to any branch
- Pull requests to main branch
- Manual workflow dispatch

## Architecture

- **Target**: `aarch64-linux-android`
- **NDK Version**: r25c
- **Minimum Android API**: 21

## How It Works

1. The workflow reads the Rspack version from `package.json`
2. Sets up Android NDK and Rust toolchain
3. Clones the official Rspack repository at the specified version
4. Configures the build for Android target
5. Builds the native binding
6. Uploads the resulting `rspack.android-arm64.node` as an artifact

## Usage

After the workflow completes, download the `rspack-android-arm64-binding` artifact from the Actions tab. The artifact contains the compiled `rspack.android-arm64.node` binary.

## Development

To update the Rspack version:
1. Edit `package.json` and update the `rspackVersion` field
2. Push changes to trigger a new build

## Requirements

The GitHub Actions workflow handles all dependencies automatically:
- Ubuntu latest
- Node.js 18
- Android NDK r25c
- Rust stable toolchain
- pnpm

## License

MIT