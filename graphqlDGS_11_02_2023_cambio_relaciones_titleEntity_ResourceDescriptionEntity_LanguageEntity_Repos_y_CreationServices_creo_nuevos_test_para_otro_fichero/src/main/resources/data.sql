--
---------------------
---------------------
---- DATASERVICE
---------------------
---------------------
INSERT INTO "resource" ("id","tipo","fecha_hora_creacion","ultima_modificacion") VALUES ('dSer1','data_service','2012-02-21T18:10:00', '2012-01-01T00:00:00');
INSERT INTO "resource" ("id","tipo","fecha_hora_creacion","ultima_modificacion") VALUES ('dSer2','data_service','2012-02-21T18:10:00', '2012-01-01T00:00:00');

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
INSERT INTO "resource" ("id","tipo","fecha_hora_creacion","ultima_modificacion") VALUES ('catalog1','catalog','2012-02-21T18:10:00', '2012-01-01T00:00:00');
INSERT INTO "resource" ("id","tipo","fecha_hora_creacion","ultima_modificacion") VALUES ('catalog2','catalog','2012-02-21T18:10:00', '2012-01-01T00:00:00');
INSERT INTO "resource" ("id","tipo","fecha_hora_creacion","ultima_modificacion") VALUES ('root','catalog','2023-02-07T18:00:00', '2023-02-07T18:01:00');

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
INSERT INTO "distribution" ("id") VALUES ('Dist1');
INSERT INTO "distribution" ("id") VALUES ('Dist2');
INSERT INTO "distribution" ("id") VALUES ('Dist3');
INSERT INTO "distribution" ("id") VALUES ('Dist4');


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
INSERT INTO "resource" ("id","tipo","fecha_hora_creacion","ultima_modificacion") VALUES ('dS1','dataset_series','2012-02-21T18:10:00', '2012-01-01T00:00:00');

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
INSERT INTO "resource" ("id","tipo","fecha_hora_creacion","ultima_modificacion","accrual_periodicity","temporal_coverage_start","temporal_coverage_end") VALUES ('d1','dataset','2012-02-21T18:10:00', '2012-01-01T00:00:00','time:days 1.0','2020-12-31T00:00:00+01:00','2020-01-01T00:00:00+01:00');
--INSERT INTO "resource" ("id", "title","tipo","dataset_service_id","fecha_hora_creacion","ultima_modificacion","accrual_periodicity","temporal_coverage_start","temporal_coverage_end") VALUES ('d1','dTit1','dataset','dSer1','2012-02-21T18:10:00', '2012-01-01T00:00:00','time:days 1.0','2020-12-31T00:00:00+01:00','2020-01-01T00:00:00+01:00');

--INSERT INTO "dataset" ("dataset_id") VALUES ('d1');
--INSERT INTO "resource" ("id", "title","tipo") VALUES ('d2','dTit2','dataset');
--INSERT INTO "dataset" ("dataset_id") VALUES ('d2');
--'time:days 1.0'


---------------------
---------------------
---- ServesDataset
---------------------
---------------------
INSERT INTO "serves_dataset" ("id_dataservice","id_resource") VALUES ('dSer1','d1');
INSERT INTO "serves_dataset" ("id_dataservice","id_resource") VALUES ('dSer1','dS1');
INSERT INTO "serves_dataset" ("id_dataservice","id_resource") VALUES ('dSer1','catalog1');
INSERT INTO "serves_dataset" ("id_dataservice","id_resource") VALUES ('dSer1','catalog2');
INSERT INTO "serves_dataset" ("id_dataservice","id_resource") VALUES ('dSer2','catalog2');

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
INSERT INTO "relationships" ("id_catalog", "id_resource") VALUES ('catalog2', 'dS1');
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
INSERT INTO "cataloginrecord" ("id_catalog_record", "id_resource") VALUES ('cR1', 'catalog2');
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
INSERT INTO "language" ("id")  VALUES ('eu');
---------------------
---------------------
---- Descriptions
---------------------
---------------------

INSERT INTO "description" ("text","resource_id") VALUES ('Descripc1Cat','catalog1');
INSERT INTO "description" ("text","resource_id") VALUES ('Descripc2Cat','catalog1');
INSERT INTO "description" ("text","resource_id")  VALUES ('Descript3Cat','catalog1');
INSERT INTO "description" ("text","resource_id")  VALUES ('Descript1Dat','d1');
INSERT INTO "description" ("text","resource_id")  VALUES ('Descripc1Ser','dSer1');

---------------------
---------------------
---- languages_descriptions
---------------------
---------------------
INSERT INTO "languages_descriptions" ("id_language","id_description") VALUES ('es','Descripc1Cat');
INSERT INTO "languages_descriptions" ("id_language","id_description") VALUES ('es','Descripc2Cat');
INSERT INTO "languages_descriptions" ("id_language","id_description") VALUES ('eu','Descripc2Cat');
INSERT INTO "languages_descriptions" ("id_language","id_description") VALUES ('en','Descript3Cat');
INSERT INTO "languages_descriptions" ("id_language","id_description") VALUES ('es','Descript1Dat');
INSERT INTO "languages_descriptions" ("id_language","id_description") VALUES ('es','Descripc1Ser');

---------------------
---------------------
---- Titles
---------------------
---------------------
INSERT INTO "titles" ("title","resource_id") VALUES ('catalogTit1','catalog1');
INSERT INTO "titles" ("title","resource_id")  VALUES ('catalogTitEn1','catalog1');
INSERT INTO "titles" ("title","resource_id")  VALUES ('dTit1','d1');
INSERT INTO "titles" ("title","resource_id")  VALUES ('dSerTit1','dSer1');
INSERT INTO "titles" ("title","resource_id")  VALUES ('dSTit1','dS1');

INSERT INTO "titles" ("title","distribution_id")  VALUES ('DistTit1','Dist1');
INSERT INTO "titles" ("title","distribution_id")  VALUES ('DistTit2','Dist2');
INSERT INTO "titles" ("title","distribution_id")  VALUES ('DistTit3','Dist3');
INSERT INTO "titles" ("title","distribution_id")  VALUES ('DistTit4','Dist4');

---------------------
---------------------
---- languages_titles
---------------------
---------------------
INSERT INTO "languages_titles" ("id_language","id_title") VALUES ('es','catalogTit1');
INSERT INTO "languages_titles" ("id_language","id_title") VALUES ('en','catalogTitEn1');
INSERT INTO "languages_titles" ("id_language","id_title") VALUES ('en','dTit1');
INSERT INTO "languages_titles" ("id_language","id_title") VALUES ('es','dSerTit1');
INSERT INTO "languages_titles" ("id_language","id_title") VALUES ('es','dSTit1');

INSERT INTO "languages_titles" ("id_language","id_title") VALUES ('en','DistTit1');
INSERT INTO "languages_titles" ("id_language","id_title") VALUES ('en','DistTit2');
INSERT INTO "languages_titles" ("id_language","id_title") VALUES ('es','DistTit3');
INSERT INTO "languages_titles" ("id_language","id_title") VALUES ('es','DistTit4');

---------------------
---------------------
---- Resources-Languages
---------------------
---------------------
INSERT INTO "languages_resources" ("id_language","id_resource") VALUES ('es','catalog1');
INSERT INTO "languages_resources" ("id_language","id_resource")  VALUES ('en','catalog1');
INSERT INTO "languages_resources" ("id_language","id_resource") VALUES ('en','d1');
INSERT INTO "languages_resources" ("id_language","id_resource")  VALUES ('es','dSer1');

---------------------
---------------------
---- Keyword
---------------------
---------------------
INSERT INTO "keyword" ("word","language_id") VALUES ('keyword 1','en');
INSERT INTO "keyword" ("word","language_id") VALUES ('keyword 2','eu');
INSERT INTO "keyword" ("word","language_id") VALUES ('keyword 3','es');
INSERT INTO "keyword" ("word","language_id") VALUES ('keyword 4','es');
---------------------
---------------------
---- Dataset-Keyword
---------------------
---------------------
INSERT INTO "dataset_keyword" ("keyword_id","dataset_id") VALUES ('keyword 1','d1');
INSERT INTO "dataset_keyword" ("keyword_id","dataset_id")   VALUES ('keyword 2','d1');
INSERT INTO "dataset_keyword" ("keyword_id","dataset_id")  VALUES ('keyword 3','d1');
INSERT INTO "dataset_keyword" ("keyword_id","dataset_id")   VALUES ('keyword 4','d1');

---------------------
---------------------
---- Location
---------------------
---------------------
INSERT INTO "location" ("nombre","tipo")   VALUES ('España/Comunidad de Madrid/Madrid','Provincia');
INSERT INTO "location" ("nombre","tipo")   VALUES ('España','Pais');
---------------------
---------------------
---- Dataset-Location
---------------------
---------------------
INSERT INTO "dataset_location" ("location_id","dataset_id")   VALUES ('España/Comunidad de Madrid/Madrid','d1');
INSERT INTO "dataset_location" ("location_id","dataset_id")   VALUES ('España','d1');