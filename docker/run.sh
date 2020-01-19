#!/bin/sh

chmod a+x import.sh
import.sh &
/opt/mssql/bin/sqlservr
