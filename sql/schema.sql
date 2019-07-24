create table sneakers
(
  sneaker_id serial primary key,
  sneaker_name text,
  image_url text,
  price int
);

create table stores
(
  store_id serial primary key,
  store_name text,
  address text,
);

create table raffles
(
  raffle_id serial primary key,
  sneaker_id int references sneakers(sneaker_id),
  store_id int references stores(store_id),
  start_time timestamptz,
  end_time timestamptz,
  post_url text,
  description text
);