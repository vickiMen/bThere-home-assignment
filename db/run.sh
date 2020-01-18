#!/bin/sh

chmod a+x /tmp/data/import.sh
/tmp/data/import.sh &
/opt/mssql/bin/sqlservr
