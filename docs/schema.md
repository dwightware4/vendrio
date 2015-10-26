# Schema Information

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
latitude    | float     | not null
longitude   | float     | not null
price       | integer   | not null
city        | string    |
state       | string    |
user_id     | integer   | not null, foreign key (references users), indexed
category_id | integer   | not null, foreign key (references categories), indexed

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
email           | string    |
f_name          | string    |
l_name          | string    |

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key
url         | string    | not null
