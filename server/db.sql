--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: created_order; Type: TABLE; Schema: public; Owner: kimberlydang
--

CREATE TABLE public.created_order (
    order_id integer NOT NULL,
    order_completed boolean,
    created_on date,
    user_id integer
);


ALTER TABLE public.created_order OWNER TO kimberlydang;

--
-- Name: created_order_order_id_seq; Type: SEQUENCE; Schema: public; Owner: kimberlydang
--

CREATE SEQUENCE public.created_order_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.created_order_order_id_seq OWNER TO kimberlydang;

--
-- Name: created_order_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kimberlydang
--

ALTER SEQUENCE public.created_order_order_id_seq OWNED BY public.created_order.order_id;


--
-- Name: inventory; Type: TABLE; Schema: public; Owner: kimberlydang
--

CREATE TABLE public.inventory (
    id integer NOT NULL,
    title character varying(300),
    price numeric,
    img character varying,
    product_id character varying
);


ALTER TABLE public.inventory OWNER TO kimberlydang;

--
-- Name: inventory_id_seq; Type: SEQUENCE; Schema: public; Owner: kimberlydang
--

CREATE SEQUENCE public.inventory_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.inventory_id_seq OWNER TO kimberlydang;

--
-- Name: inventory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kimberlydang
--

ALTER SEQUENCE public.inventory_id_seq OWNED BY public.inventory.id;


--
-- Name: items_ordered; Type: TABLE; Schema: public; Owner: kimberlydang
--

CREATE TABLE public.items_ordered (
    items_id integer NOT NULL,
    product_id character varying,
    order_id integer
);


ALTER TABLE public.items_ordered OWNER TO kimberlydang;

--
-- Name: items_ordered_items_id_seq; Type: SEQUENCE; Schema: public; Owner: kimberlydang
--

CREATE SEQUENCE public.items_ordered_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.items_ordered_items_id_seq OWNER TO kimberlydang;

--
-- Name: items_ordered_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kimberlydang
--

ALTER SEQUENCE public.items_ordered_items_id_seq OWNED BY public.items_ordered.items_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: kimberlydang
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(300) NOT NULL,
    email character varying(300) NOT NULL,
    sub character varying(300)
);


ALTER TABLE public.users OWNER TO kimberlydang;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: kimberlydang
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO kimberlydang;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kimberlydang
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: created_order order_id; Type: DEFAULT; Schema: public; Owner: kimberlydang
--

ALTER TABLE ONLY public.created_order ALTER COLUMN order_id SET DEFAULT nextval('public.created_order_order_id_seq'::regclass);


--
-- Name: inventory id; Type: DEFAULT; Schema: public; Owner: kimberlydang
--

ALTER TABLE ONLY public.inventory ALTER COLUMN id SET DEFAULT nextval('public.inventory_id_seq'::regclass);


--
-- Name: items_ordered items_id; Type: DEFAULT; Schema: public; Owner: kimberlydang
--

ALTER TABLE ONLY public.items_ordered ALTER COLUMN items_id SET DEFAULT nextval('public.items_ordered_items_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: kimberlydang
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: created_order; Type: TABLE DATA; Schema: public; Owner: kimberlydang
--

COPY public.created_order (order_id, order_completed, created_on, user_id) FROM stdin;
1	t	2022-11-02	2
2	t	2022-11-04	2
3	t	2022-11-09	3
5	f	2022-11-10	3
4	t	2022-11-10	2
6	t	2022-11-16	4
\.


--
-- Data for Name: inventory; Type: TABLE DATA; Schema: public; Owner: kimberlydang
--

COPY public.inventory (id, title, price, img, product_id) FROM stdin;
1	Foldsack No. 1 Backpack	109.95	https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg	1
2	Casual Premium Slim Fit T-Shirts	22.3	https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg	2
3	 Cotton Jacket	55.99	https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg	3
4	Casual Slim Fit	15.99	https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg	4
5	3-in-1 Snowboard Jacket Winter Coats	56.99	https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg	15
6	Removable Hooded Faux Leather Moto Biker Jacket	29.95	https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg	16
7	Windbreaker Striped Climbing Raincoats	39.99	https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg	17
8	 Solid Short Sleeve Boat Neck V	9.85	https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg	18
9	Short Sleeve Moisture	7.95	https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg	19
10	T Shirt Casual Cotton Short	12.99	https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg	20
\.


--
-- Data for Name: items_ordered; Type: TABLE DATA; Schema: public; Owner: kimberlydang
--

COPY public.items_ordered (items_id, product_id, order_id) FROM stdin;
1	4	1
2	18	2
4	1	2
5	2	2
9	17	3
10	18	3
12	1	3
15	3	4
16	1	4
19	1	5
21	19	5
23	17	6
24	1	6
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: kimberlydang
--

COPY public.users (id, name, email, sub) FROM stdin;
1	Angelo	Angelo@yahoo.com	KIM123456789
2	Kimberly Dang	dangkimberly26@gmail.com	google-oauth2|112075921748948201987
3	dang042@cougars.csusm.edu	dang042@cougars.csusm.edu	auth0|6363fb7856351a47c9f1616a
4	bill.d@fastmail.com	bill.d@fastmail.com	auth0|637561f667ad3e09030c8439
\.


--
-- Name: created_order_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimberlydang
--

SELECT pg_catalog.setval('public.created_order_order_id_seq', 6, true);


--
-- Name: inventory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimberlydang
--

SELECT pg_catalog.setval('public.inventory_id_seq', 10, true);


--
-- Name: items_ordered_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimberlydang
--

SELECT pg_catalog.setval('public.items_ordered_items_id_seq', 24, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimberlydang
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: created_order created_order_pkey; Type: CONSTRAINT; Schema: public; Owner: kimberlydang
--

ALTER TABLE ONLY public.created_order
    ADD CONSTRAINT created_order_pkey PRIMARY KEY (order_id);


--
-- Name: inventory inventory_pkey; Type: CONSTRAINT; Schema: public; Owner: kimberlydang
--

ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT inventory_pkey PRIMARY KEY (id);


--
-- Name: items_ordered items_ordered_pkey; Type: CONSTRAINT; Schema: public; Owner: kimberlydang
--

ALTER TABLE ONLY public.items_ordered
    ADD CONSTRAINT items_ordered_pkey PRIMARY KEY (items_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: kimberlydang
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: created_order created_order_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kimberlydang
--

ALTER TABLE ONLY public.created_order
    ADD CONSTRAINT created_order_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

