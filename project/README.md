# Personal website project

This is the project management, where all issues, ideas, and discussions happen. The intention of this project is to create a personal website.

## Metadata

1. project identifier: `PWP` (personal web page);

## Project structure

1. the top level `project/README.md` describes the project;
2. the project has an identifier with three letters, e.g., `PWP`;
3. the hierarchy is:
   1. project
   2. epic
   3. issue (or story)
4. attachments are always associated with an issue
   1. `project/attachment/PWP-1/PWP-2/file.txt`
5. all markdown files have metadata (except the top level project description)
   1. `title`: any text
   2. `id`: must be in the format `PWP-XYZ`, where `PWP` is the project identifier and `XYZ` is a unique number for the project
   3. `type`: one of `epic, issue, story`
   4. `status`:
      1. `epic`:
         1. `not started`
         2. `in progress`
         3. `solved`
      2. `story`:
         1. `incomplete`
         2. `complete`
      3. `issue`:
         1. `0. blocked`
         2. `0. not started`
         3. `2. release criteria: disambiguation`
         4. `3. how: map changes`
         5. `4. assumption test`
         6. `5. implementation`
         7. `6. release criteria: test`
         8. `7. solved`
         9. `7. discarded`
   5. `start-date` (optional): [ISO 8601 date format](https://en.wikipedia.org/wiki/ISO_8601) `YYYY-MM-DDThh:mm:ss+TZ`, e.g., `2025-02-18T03:33:00−12:00`
   6. `end-date` (optional): [ISO 8601 date format](https://en.wikipedia.org/wiki/ISO_8601) `YYYY-MM-DDThh:mm:ss+TZ`, e.g., `2025-02-18T03:33:00−12:00`
6. four possible commit types are included:
   1. `p-add` add epic, issue, story
      1. in the commit, only file additions are allowed
   2. `p-update`: update epic, issue, story
      1. in the commit, only file modifications are allowed
   3. `p-remove`: remove epic, issue, story
      1. in the commit, only file removals are allowed
   4. `chore`: anything not related to the project files (e.g. `.gitignore, .editorconfig, etc`)

### File structure

```plain
.git
project/
    README.md: project description
    epic/
        PWP-1/
            README.md: epic description
            PWP-2.md: issue
    attachments/
        PWP-1/
            PWP-2/
```

### Markdown metadata example

```yaml
---
title: my aamazing epic
id: PWP-1
type: epic
status: not started
start-date: 2025-01-01
end-date: 2025-12-31
---
```
