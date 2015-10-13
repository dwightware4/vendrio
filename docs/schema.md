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

## karma
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed, unique w/post_id
post_id         | integer   | not null, foreign key (references posts), indexed, unique w/user_id
value           | integer   | not null,
