#!/bin/bash

port=$1
echo "要停止的端口号为：$1"
if [ ! -n "$port" ];then
port=3000;
fi
echo "PORT: $port"
# netstat –tunlp
# netstat -tunlp
pid=$(lsof -t -i:$port)
echo "PID: $pid"
if [ -n "$pid" ];then
kill -9 $pid
fi
echo "开始启动"
ts-node src/index.ts
