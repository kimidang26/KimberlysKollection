/* Replace with your SQL commands */

CREATE TABLE public.created_order (
    order_id SERIAL PRIMARY KEY,
    order_completed boolean,
    created_on date,
    user_id integer
);

CREATE TABLE public.inventory (
    id SERIAL PRIMARY KEY,
    title character varying(300),
    price numeric,
    img character varying,
    product_id character varying
);

CREATE TABLE public.items_ordered (
    items_id SERIAL PRIMARY KEY,
    product_id character varying,
    order_id integer
);


CREATE TABLE public.users (
    id SERIAL PRIMARY KEY,
    name character varying(300) NOT NULL,
    email character varying(300) NOT NULL,
    sub character varying(300)
);


INSERT INTO public.created_order (order_id, order_completed, created_on, user_id) VALUES (1, true, '2022-11-02', 2);
INSERT INTO public.created_order (order_id, order_completed, created_on, user_id) VALUES (2, true, '2022-11-04', 2);
INSERT INTO public.created_order (order_id, order_completed, created_on, user_id) VALUES (3, true, '2022-11-09', 3);
INSERT INTO public.created_order (order_id, order_completed, created_on, user_id) VALUES (4, false, '2022-11-10', 2);
INSERT INTO public.created_order (order_id, order_completed, created_on, user_id) VALUES (5, false, '2022-11-10', 3);

INSERT INTO public.inventory (id, title, price, img, product_id) VALUES (1, 'Foldsack No. 1 Backpack', 109.95, 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', '1');
INSERT INTO public.inventory (id, title, price, img, product_id) VALUES (2, 'Casual Premium Slim Fit T-Shirts', 22.3, 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', '2');
INSERT INTO public.inventory (id, title, price, img, product_id) VALUES (3, ' Cotton Jacket', 55.99, 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', '3');
INSERT INTO public.inventory (id, title, price, img, product_id) VALUES (4, 'Casual Slim Fit', 15.99, 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg', '4');
INSERT INTO public.inventory (id, title, price, img, product_id) VALUES (5, '3-in-1 Snowboard Jacket Winter Coats', 56.99, 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg', '15');
INSERT INTO public.inventory (id, title, price, img, product_id) VALUES (6, 'Removable Hooded Faux Leather Moto Biker Jacket', 29.95, 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg', '16');
INSERT INTO public.inventory (id, title, price, img, product_id) VALUES (7, 'Windbreaker Striped Climbing Raincoats', 39.99, 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg', '17');
INSERT INTO public.inventory (id, title, price, img, product_id) VALUES (8, ' Solid Short Sleeve Boat Neck V', 9.85, 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg', '18');
INSERT INTO public.inventory (id, title, price, img, product_id) VALUES (9, 'Short Sleeve Moisture', 7.95, 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg', '19');
INSERT INTO public.inventory (id, title, price, img, product_id) VALUES (10, 'T Shirt Casual Cotton Short', 12.99, 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg', '20');


INSERT INTO public.items_ordered (items_id, product_id, order_id) VALUES (1, '4', 1);
INSERT INTO public.items_ordered (items_id, product_id, order_id) VALUES (2, '18', 2);
INSERT INTO public.items_ordered (items_id, product_id, order_id) VALUES (4, '1', 2);
INSERT INTO public.items_ordered (items_id, product_id, order_id) VALUES (5, '2', 2);
INSERT INTO public.items_ordered (items_id, product_id, order_id) VALUES (9, '17', 3);
INSERT INTO public.items_ordered (items_id, product_id, order_id) VALUES (10, '18', 3);
INSERT INTO public.items_ordered (items_id, product_id, order_id) VALUES (12, '1', 3);
INSERT INTO public.items_ordered (items_id, product_id, order_id) VALUES (15, '3', 4);
INSERT INTO public.items_ordered (items_id, product_id, order_id) VALUES (16, '1', 4);
INSERT INTO public.items_ordered (items_id, product_id, order_id) VALUES (19, '1', 5);
INSERT INTO public.items_ordered (items_id, product_id, order_id) VALUES (21, '19', 5);




SELECT pg_catalog.setval('public.created_order_order_id_seq', 5, true);
SELECT pg_catalog.setval('public.inventory_id_seq', 10, true);
SELECT pg_catalog.setval('public.items_ordered_items_id_seq', 21, true);
SELECT pg_catalog.setval('public.users_id_seq', 3, true);
