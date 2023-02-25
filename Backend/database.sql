create database hackersCorner;
create table users (id serial primary key,name varchar,email varchar unique,password varchar,avatar varchar default 'https://res.cloudinary.com/dqalbizzj/image/upload/v1677281657/pngwing.com_ubotpa.png');
create table posts (id serial primary key, user_id bigint references users(id), avatar varchar default 'https://res.cloudinary.com/dqalbizzj/image/upload/v1677281657/pngwing.com_ubotpa.png',image varchar,isLiked boolean,caption varchar);