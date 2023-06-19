## Getting started with damocles

This guide will walk you through how to qiuckly get started with damocles

## Preparation

1. Install 3rd party dependencies. Please refer to instrcutions [here](https://lotus.filecoin.io/docs/set-up/install/#building-from-source).

2. Download source code.

```bash
$ git clone https://github.com/ipfs-force-community/damocles.git
```

3. Compile `damocles` component.

```bash
$ cd damocles
$ make all
```

:::tip

After completion, you should be able to find binaries for both `damocles-worker` and `damocles-manager`.

:::

4. Copy the binaries to your machine(s).

5. Copy `./damocles-worker/create-cgroup.sh` to all `damocles-worker` machine and execute the script under same user which you are going to run `damocles-worker`.

:::tip

The script will generate `cgroup` for the user, which allows `damocles-worker` to allocate hardware resources accordingly.

:::

## Mock mode

By default, starting a set of `mock` instance can be done by a series of commands. 

### damocles-manager

For example, start `damocles-manager` with a dummy miner actor `t010000` and schedule sealing jobs with sector size of 2KiB.

```bash
$ ./dist/bin/damocles-manager mock --miner=10000 --sector-size=2KiB
```

:::tip

`./mock/start_smgr.sh` could also be used to do this.

:::

### damocles-worker

1. Init both sealing and permanent storage. 

```bash
$ ./dist/bin/damocles-worker store sealing-init -l ./mock-tmp/store1 ./mock-tmp/store2 ./mock-tmp/store3

$ ./dist/bin/damocles-worker store file-init -l ./mock-tmp/remote
```

:::tip

`./mock/cleanup_store.sh` could also be used to do this.

:::

2. Start `damocles-worker` in `mock` mode.

```bash
$ ./dist/bin/damocles-worker daemon -c ./damocles-worker/assets/damocles-worker.mock.toml
```

:::tip

`./mock/start_worker.sh` could also be used to do this.

:::

## Production mode

### damocles-manager

1. Init working directories.

```bash
$ ./dist/bin/damocles-manager daemon init
```

2. Configure `~/.damocles-manager/sector-manager.cfg` per your use case.

:::tip

For more details on what each configuration does, please refer to [this document](https://github.com/ipfs-force-community/damocles/blob/main/docs/en/04.damocles-manager-config.md).

:::

3. Start `damocles-manager`.

```bash
$ ./dist/bin/damocles-manager daemon run
```

### damocles-worker

1. Init sealing path for unsealed sector(s).

```bash
$ ./dist/bin/damocles-worker store sealing-init -l <dir1> <dir2> <dir3> <...>
```

2. Init permanent storage path for sealed sector(s).

```bash
$ ./dist/bin/damocles-worker store file-init -l <dir1>
```

3. Configure your `damocles-worker` according to your planning of CPU cores, numa, zone and etc for each sealing phases.

:::tip

For more details on what each configuration does, please refer to [this document](https://github.com/ipfs-force-community/damocles/blob/main/docs/en/03.damocles-worker-config.md).

:::

4. Start `damocles-worker`.

```bash
$ /path/to/damocles-worker daemon -c /path/to/damocles-worker.toml
```
