#!/bin/bash
#
# Generate new database with sample tables

rm data.db
sqlite3 data.db < dump.sql
