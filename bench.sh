#!/usr/bin/env bash

seq 1000 | xargs -I -- node index > output1.txt & \
seq 1000 | xargs -I -- node index > output2.txt & \
seq 1000 | xargs -I -- node index > output3.txt & \
seq 1000 | xargs -I -- node index > output4.txt & \
seq 1000 | xargs -I -- node index > output5.txt

cat output1.txt output2.txt output3.txt output4.txt output5.txt > output.txt

