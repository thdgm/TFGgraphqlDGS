--
---------------------
---------------------
---- DATASERVICE
---------------------
---------------------
INSERT INTO "resource" ("id", "title","tipo","fecha_hora_creacion","ultima_modificacion") VALUES ('dSer1','dServTit1','data_service','2012-02-21T18:10:00', '2012-01-01T00:00:00');

--INSERT INTO "dataservice" ("id") VALUES ('dSer1');
--INSERT INTO "resource" ("id", "title","tipo") VALUES ('dSer2','dServTit2','data_service');
--INSERT INTO "dataservice" ("id") VALUES ('dSer2');
--
---------------------
---------------------
---- CATALOG
---------------------
---------------------
--
INSERT INTO "resource" ("id", "title","tipo","dataset_service_id","fecha_hora_creacion","ultima_modificacion") VALUES ('catalog1','catalogTit1','catalog','dSer1','2012-02-21T18:10:00', '2012-01-01T00:00:00');

--INSERT INTO "catalog" ("catalog_id") VALUES ('catalog1');
--INSERT INTO "resource" ("id", "title","tipo") VALUES ('catalog2','catalogTit2','catalog');
--INSERT INTO "catalog" ("catalog_id") VALUES ('catalog2');
--INSERT INTO "resource" ("id", "title","tipo") VALUES ('catalog3','catalogTit3','catalog');
--INSERT INTO "catalog" ("catalog_id") VALUES ('catalog3');
--
---------------------
---------------------
---- DISTRIBUTIONS
---------------------
---------------------
--
INSERT INTO "distribution" ("id", "title") VALUES ('Dist1','DistTit1');
INSERT INTO "distribution" ("id", "title") VALUES ('Dist2','DistTit2');
INSERT INTO "distribution" ("id", "title") VALUES ('Dist3','DistTit3');
INSERT INTO "distribution" ("id", "title") VALUES ('Dist4','DistTit4');

---------------------
---------------------
---- AccessService
---------------------
---------------------

INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist1','dSer1');
INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist2','dSer1');
INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist3','dSer1');
INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist4','dSer1');
--INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist2','dSer2');
--INSERT INTO "acessservice" ("distribution_id","data_service_id") VALUES ('Dist3','dSer2');
--
---------------------
---------------------
---- DATASET SERIES
---------------------
---------------------
--
INSERT INTO "resource" ("id", "title","tipo","dataset_service_id","fecha_hora_creacion","ultima_modificacion") VALUES ('dS1','dSTit1','dataset_series','dSer1','2012-02-21T18:10:00', '2012-01-01T00:00:00');
--INSERT INTO "datasetseries" ("dataset_series_id") VALUES ('dS1');
--INSERT INTO "resource" ("id", "title","tipo") VALUES ('dS2','dSTit2','dataset_series');
--INSERT INTO "datasetseries" ("dataset_series_id") VALUES ('dS2');
--
---------------------
---------------------
---- DATASET
---------------------
---------------------
--
INSERT INTO "resource" ("id", "title","tipo","dataset_service_id","fecha_hora_creacion","ultima_modificacion") VALUES ('d1','dTit1','dataset','dSer1','2012-02-21T18:10:00', '2012-01-01T00:00:00');
--INSERT INTO "dataset" ("dataset_id") VALUES ('d1');
--INSERT INTO "resource" ("id", "title","tipo") VALUES ('d2','dTit2','dataset');
--INSERT INTO "dataset" ("dataset_id") VALUES ('d2');

---------------------
---------------------
----InSeries
---------------------
---------------------
INSERT INTO "inseries" ("dataset_id","data_series_id") VALUES ('d1','dS1');

---------------------
---------------------
--Distributions
---------------------
---------------------

INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d1','Dist1');
INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d1','Dist2');
INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d1','Dist3');
INSERT INTO "distributions" ("dataset_id","distribution_id") VALUES ('d1','Dist4');


---------------------
---------------------
---- RELATIONSHIPS
---------------------
---------------------
INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('catalog1', 'dS1');
INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('catalog1', 'dSer1');
INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('catalog1', 'd1');
INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('catalog1', 'catalog1');
--
--------------------
---------------------
---- CATALOG RECORD
---------------------
---------------------
--
INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR1','cRTit1','catalog1');
INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR2','cRTit2','dSer1');
INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR3','cRTit3','d1');
INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR4','cRTit4','dS1');
--INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR5','cRTit5','catalog2');
--INSERT INTO "catalogrecord" ("id", "title","resource_id") VALUES ('cR6','cRTit6','catalog3');
--
---------------------
---------------------
---- CATALOGINRECORD
---------------------
---------------------
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR1', 'catalog1');
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR2', 'catalog1');
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR3', 'catalog1');
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR4', 'catalog1');
--INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR5', 'catalog2');
--INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR6', 'catalog3');
--

---------------------
---------------------
---- Languages
---------------------
---------------------
INSERT INTO "language" ("id") VALUES ('es');
INSERT INTO "language" ("id")  VALUES ('en');
---------------------
---------------------
---- Descriptions
---------------------
---------------------

INSERT INTO "description" ("text","language_id","resource_id") VALUES ('Descripc1Cat','es','catalog1');
INSERT INTO "description" ("text","language_id","resource_id") VALUES ('Descripc2Cat','es','catalog1');
INSERT INTO "description" ("text","language_id","resource_id")  VALUES ('Descript3Cat','en','catalog1');
INSERT INTO "description" ("text","language_id","resource_id")  VALUES ('Descript1Dat','en','d1');
INSERT INTO "description" ("text","language_id","resource_id")  VALUES ('Descripc1Ser','es','dSer1');

---------------------
---------------------
---- Resoruces-Languages
---------------------
---------------------
INSERT INTO "languages_resources" ("id_language","id_resource") VALUES ('es','catalog1');
INSERT INTO "languages_resources" ("id_language","id_resource")  VALUES ('en','catalog1');
INSERT INTO "languages_resources" ("id_language","id_resource") VALUES ('en','d1');
INSERT INTO "languages_resources" ("id_language","id_resource")  VALUES ('es','dSer1');
