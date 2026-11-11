### Changed

- Use LogiBricks Workspace artwork and light/dark colors across desktop, Web and mobile. Keep the calibrated macOS icon and compact settings mark.
- Integrate upstream 0.67.1 while retaining company release configuration, disabled mobile OTA and original software credits. Stored protocols, bundle identifiers and user data keep their existing names.

### Fixed

- Apply company release checks to the new recovery updater and download paths. Reject recovery updates from read-only macOS application bundles before teardown.
- Keep upstream resources identified as OpenBot, and show company deployment and unpublished-release notices. English and Chinese provide these notices; other locales use the documented English fallback.
