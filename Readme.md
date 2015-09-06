# Init ExtJS 4 workspace with required packages

This creates an Sencha Cmd workspace with all required packages.

```
$ git clone --recursive https://github.com/bentrm/gxc-workspace.git
$ cd gxc-workspace
```

# Start GXC Full demo with Sencha Cmd tool

```
$ cd packages/GXC/examples/GXCFull
$ sencha app watch
```

A development server will start on port 1841 und should present you with the
demo application.

# Contribute bug fixes and features to GXC

The packages cloned into the `packages/` sub directory are Git repositories aswell.
To contribute changes to GXC you can work with this workspace right away.

```
$ cd packages/GXC
$ git checkout master     # attach to actual master state of remote branch
$ git checkout -b feature # checkout new branch "feature" to work on
```

From here on, you can commit to your branch and add features.
