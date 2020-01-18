#!/bin/sh

#wait for sql server to start
sleep 10

#import database from bak file
/opt/mssql-tools/bin/sqlcmd -S localhost -U vicki -P "$MSSQL_SA_PASSWORD" -Q "RESTORE DATABASE ExampleDb FROM DISK='/tmp/data/myDB.bak' WITH MOVE 'ExampleDb' TO '/var/opt/mssql/data/ExampleDb.mdf', MOVE 'ExampleDb_log' TO '/var/opt/mssql/data/ExampleDb.ldf'"

#run SQL to modify the DB
/opt/mssql-tools/bin/sqlcmd -S localhost -U vicki -P "$MSSQL_SA_PASSWORD" -d ExampleDb -i /tmp/data/mods.sql
