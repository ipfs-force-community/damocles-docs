# 快速启用

## 准备工作

1. 安装必要的第三方库。

   这一部分可以参考 `lotus` 文档中的相应部分 [building-from-source](https://lotus.filecoin.io/docs/set-up/install/#building-from-source)。

2. 下载代码库

   ```
   git clone https://github.com/ipfs-force-community/damocles.git
   ```

3. 编译 `damocles` 的组件

   ```
   cd damocles
   make all
   ```

   完成后，在 `./dist/bin` 目录下会有 `damocles-worker` 和 `damocles-manager` 两个可执行文件。

4. 分发可执行文件到需要的机器上。

5. 将 `./damocles-worker/create-cgroup.sh` 分发到 `damocles-worker` 所在的机器上，并以准备运行 `damocles-worker` 的系统用户身份执行。

   这会为这样的用户生成相应的 `cgroup` 组，以便`damocles-worker` 为其外部执行器进程分配硬件资源。



## Mock 模式

默认情况下，可以通过一系列命令在单机上启动一组 `mock` 实例。

### damocles-manager

通过

```
./dist/bin/damocles-manager mock --miner=10000 --sector-size=2KiB
```

命令启动一个模拟为 Actor 为 `t010000`   的 `SP` 分配 2KiB 扇区的 `damocles-manager` 服务。

这一步骤也可以通过代码目录中的 `./mock/start_smgr.sh` 脚本完成。



### damocles-worker

1. 创建并初始化本地存储，初始化远程存储

   ```
   ./dist/bin/damocles-worker store sealing-init -l ./mock-tmp/store1 ./mock-tmp/store2 ./mock-tmp/store3
   ./dist/bin/damocles-worker store file-init -l ./mock-tmp/remote
   ```

   这一步骤也可以通过代码目录中的 `./mock/cleanup_store.sh` 脚本完成。

2. 以 `mock` 配置启动 `damocles-worker`

   ```
   ./dist/bin/damocles-worker daemon -c ./damocles-worker/assets/damocles-worker.mock.toml
   ```

   这一步骤也可以通过代码目录中的 `./mock/start_worker.sh` 脚本完成。



## 生产模式

### damocles-manager

1. 初始化工作目录

   ```
   ./dist/bin/damocles-manager daemon init
   ```

2. 按需配置默认配置文件 `~/.damocles-manager/sector-manager.cfg`

   配置项、作用、配置方法可以参考文档 `04.damocles-manager的配置解析`。

3. 启动 `damocles-manager`

   ```
   ./dist/bin/damocles-manager daemon run
   ```

:::warning
建议参看[Poster 分离文档](poster.md)分别将计算`windowPost`和`winningPost`的进程启动在各自进程专用的机器上。如果想让`secotr-manager`运行所有`Post`计算，可以这样启动`sector-manager`:
```bash
$ ./dist/bin/damocles-manager daemon run --miner --poster
```
:::

### damocles-worker

1. 规划用于封装过程中数据的本地存储，并使用

   ```
   ./dist/bin/damocles-worker store sealing-init -l <dir1> <dir2> <dir3> <...>
   ```

   命令创建并初始化数据目录。

2. 挂载持久化数据目录，并使用

   ```
   ./dist/bin/damocles-worker store file-init -l <dir1>
   ```

   命令初始化数据目录。

3. 规划用于各阶段的 CPU 核、numa 区域等配置。

   按需完成配置文件。

   配置项、作用、配置方法可以参考文档 `03.damocles-worker的配置解析`。

4. 使用

   ```
   /path/to/damocles-worker daemon -c /path/to/damocles-worker.toml
   ```

   启动 `damocles-worker`。
