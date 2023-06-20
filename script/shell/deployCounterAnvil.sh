#!/bin/bash

source .env

forge script script/Counter.s.sol:CounterScript --rpc-url $LOCAL_RPC_URL --broadcast -vvvv