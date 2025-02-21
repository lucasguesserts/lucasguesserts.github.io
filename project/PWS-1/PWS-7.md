---
title: Page does not render correctly on mobile
id: PWS-7
type: issue
status: 0. not started
start-date: 2025-02-21
end-date: 2025-02-21
---

## 1. Description

### 1.1. Current State

The webpage does not render correctly on my mobile phone.

### 1.2. Problem Identification

There is a problem with how the width, padding, and margin of the page is set.

### 1.3. Target State

To have the page rendering well on my mobile phone.

## 5. Implementation

Use [Vite](https://vite.dev/) to serve the file in the local network:

```sh
npm install vite
sudo firewall-cmd --add-port=5173/tcp  # open door in firewall
npx vite dev --host $HOSTNAME --port 5173 docs/
# vite informs how to access
# CTRL + C to close vite
sudo firewall-cmd --reload # reset firewall, to close the opened door
```
