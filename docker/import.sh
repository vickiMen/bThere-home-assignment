#!/bin/sh

#wait for sql server to start
sleep 10

#pull image
sudo docker pull microsoft/mssql-server-linux:2017-latest;

#run 
docker run -e 'HOMEBREW_NO_ENV_FILTERING=1' -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=MichaelJordan23' -p 1433:1433 -d microsoft/mssql-server-linux;

#connect through cli
sqlcmd -S 127.0.0.1 -U sa -P MichaelJordan23;
